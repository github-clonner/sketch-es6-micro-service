import mongoose from 'mongoose';
import { NotFoundError } from '../lib/customError';


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Instance Methods
 */
userSchema.method({
  // addViewCount() {
  //   return this.update({$inc: {viewCount: 1}});
  // }
});

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @param {String} populate - Fields want to be populated.
   * @returns {Promise<User, APIError>}
   */
  get(id, populate = '') {
    return this.findById(id)
      .populate(populate)
      .exec().then((user) => {
        if (user) {
          return user;
        }
        const err = new NotFoundError('User not found');
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} offset - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @param {Object} condition - Query condition.
   * @param {String} populate - Fields want to be populated.
   * @returns {Promise<User[]>}
   */
  list({offset = 0, limit = 100, conditions, populate = ''} = {}) {
    return this.find(conditions)
//      .sort('index')
      .skip(Number(offset))
      .limit(Number(limit))
      .populate(populate)
      .exec();
  },
};

export default mongoose.model('User', userSchema);
