import {expect} from 'chai';
import {NotFoundError} from './customError';

describe('NotFoundError', () => {
  it('should have message and status', () => {
    const err = new NotFoundError('not found');
    expect(err.message).to.equal('not found');
    expect(err.status).to.equal(404);
  });
});
