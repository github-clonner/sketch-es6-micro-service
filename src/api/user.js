import {Router} from 'express';
import users from '../models/user';
import {NotFoundError} from '../lib/customError';


const router = new Router();

/**
 * Load post and append to req.
 */
function load(req, res, next, id) {
  const user = users.find(u => u.id === id);
  const err = user ? null : new NotFoundError('Not Found');
  Object.assign(req, {user});
  return next(err);
}

/**
 * @api {GET} /api/users/:id getUser
 * @apiDescription get user by id
 * @apiUse Header
 *
 * @apiName Get User
 * @apiGroup User
 *
 * @apiParam {String} id User's ID
 *
 * @apiUse User
 *
 * @apiSuccessExample {json} Success-Response
 *   HTTP/1.1 200 OK
 *  {
 *    "id": "589c2c70791ca5e08da363f1",
 *    "updatedAt": "2017-02-09T08:46:40.441Z",
 *    "createdAt": "2017-02-09T08:46:40.441Z",
 *    "name": "admin",
 *    "avatar": "http://p.36node.com/1.png"
 *  }
 *
 */
function get({user}, res) {
  return res.json(user);
}

/**
 * @api {POST} /users Create User
 * @apiDescription Create a user
 * @apiUse Header
 *
 * @apiName Create User
 * @apiGroup User
 *
 * @apiParam {String} name username
 * @apiParam {String} avatar user avatar
 *
 * @apiUse User
 */
function create({body}, res) {
  const user = Object.assign({id: users.length.toString(36)}, body);
  users.push(user);
  res.json(user);
}

/**
 * @api {PUT} /users/:id update user
 * @apiDescription Update user by id
 * @apiUse Header
 *
 * @apiName Update User
 * @apiGroup User
 *
 * @apiParam {String} id user id
 * @apiParam {String} name username
 * @apiParam {String} avatar user avatar
 *
 * @apiUse User
 */
function update({user, body}, res) {
  Object.assign(user, body);
  res.json(user);
}

/**
 * @api {Get} /users get user list
 * @apiUse Header
 *
 * @apiName List Users
 * @apiGroup User
 *
 * @apiParam {number} offset=0    Number of users to be skipped.
 * @apiParam {number} limit=100   Limit number of users to be returned.
 *
 * @apiUse Users
 */
function list({offset = 0, limit = 100}, res) {
  res.json(users.slice(offset, offset + limit));
}

/**
 * @api {DELETE} /users/:id delete user
 * @apiDescription delete user by id
 *
 * @apiUse Header
 *
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {String} id user's id
 *
 * @apiUse User
 */
function remove({user}, res) {
  users.splice(users.indexOf(user), 1);
  res.json(user);
}

// routers
router.param('id', load);
router.get('/', list);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;


/**
 * @apiDefine User
 * @apiSuccess {String} id user's id
 * @apiSuccess {String} name user's name
 * @apiSuccess {String} avatar user's avatar
 * @apiSuccess {Date} updateAt last updated time
 * @apiSuccess {Date} createAt created time
 */

 /**
  * @apiDefine Posts
  * @apiSuccess {Post[]}  - List of users
  * @apiSuccess {String}  -.id user's id
  * @apiSuccess {String}  -.name user's name
  * @apiSuccess {String}  -.avatar user's avatar
  * @apiSuccess {Date}    -.updateAt last updated time
  * @apiSuccess {Date}    -.createAt created time
  */
