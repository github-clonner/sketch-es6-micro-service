import { Router } from 'express';
import userRouter from './user';


export default function() {
  const api = new Router();

  api.use('/users', userRouter);

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({
      healthy: 'good',
    });
  });

  return api;
}

/**
 * common comments
 */

/**
 * @apiDefine Header
 * @apiHeader (Request Header) {String} Content-Type application/json
 * @apiHeader (Request Header) {String} Authorization Bearer {{token}}
 */
