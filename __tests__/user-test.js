'use strict';

jest.mock('../request');

import * as user from '../user';

// The promise that is being tested should be returned.
it('works with promises', () => {
  return user.getUserName(5)
    .then(name => expect(name).toEqual('Paul'));
});

// async/await
it('work with async/await', async () => {
  const userName = await user.getUserName(4);
  expect(userName).toEqual('Mark');
})

// catch
it('tests error with promises', () => {
  return user.getUserName(3)
  .catch(e => expect(e).toEqual({
    error: 'User with 3 not found.',
  }));
});

// try-catch
it('tests error with async/await', async () => {
  try {
    await user.getUserName(1);
  } catch (error) {
    expect(error.error).toEqual('User with 1 not found.');
  }
})