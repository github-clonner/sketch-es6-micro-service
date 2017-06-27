import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import jwt from 'express-jwt';
import fs from 'fs';
import helmet from 'helmet';
import http from 'http';
import methodOverride from 'method-override';
import logger from 'morgan';
import path from 'path';
import {APP_PORT, ENDPOINT, JWT_PUBLIC_KEY} from './config';
import api from './api';
import db from './db';
import {
  NotFoundError,
  ExtendableError,
  ForbiddenError,
  InternalError,
  ValidationError,
  UnauthorizedError
} from './lib/customError';


const publicKey = fs.readFileSync(JWT_PUBLIC_KEY);
const jwtMiddleware = jwt({secret: publicKey});
const app = express();
app.server = http.createServer(app);

// log
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
} else {
  app.use(logger('tiny', {
    skip: (req, res) => res.statusCode < 400,
  }));
}

app.use(cors({ exposedHeaders: ['Link'] })); // enable CORS - Cross Origin Resource Sharing
app.use(`${ENDPOINT}/`, express.static(path.join(__dirname, '../docs/www')));
app.use(bodyParser.json({ limit: '100kb' }));
app.use(jwtMiddleware.unless({path: [/\/docs/]}));
app.use(methodOverride());
app.use(helmet()); // secure apps by setting various HTTP headers
app.use(ENDPOINT, api());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new NotFoundError('API not found');
  return next(err);
});

// log error and change error format
app.use((err, req, res, next) => {
  if (err instanceof ExtendableError) {
    return next(err);
  }

  console.error(err);   // eslint-disable-line
  if (err.name === 'ValidationError') {
    const error = Array.isArray(err.errors) ? err.errors[0] : err;
    return next(new ValidationError(error.message, error.type, error.path, error.value));
  }

  if (err instanceof jwtMiddleware.UnauthorizedError) {
    return next(new UnauthorizedError(err.message, err.code));
  }

  if (err.name === 'InvalidCredentialsError') {
    return next(new ForbiddenError('invalid credentials'));
  }

  return next(new InternalError(err.message || err, err.type || err.code, err.path, err.value));
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {   // eslint-disable-line no-unused-vars
  res.status(err.status).json(err);
});

// connect to db
db(() => {
  app.server.listen(APP_PORT);
  console.log(`Started on port ${app.server.address().port}`);  // eslint-disable-line
});

export default app;
