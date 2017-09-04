import mongoose from 'mongoose';
import { DB_CONNECTION } from './config';


export default function(callback) {
  // connect to mongodb
  mongoose.Promise = Promise;
  mongoose.connect(DB_CONNECTION);
  const db = mongoose.connection;
  db.on('error', err => console.error(err));  // eslint-disable-line
  db.once('open', callback);
}
