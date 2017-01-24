import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Meteor } from 'meteor/meteor';
import Messages from '../models/message.js';

describe('Clean DB', function () {
  beforeEach(function () {
    resetDatabase();
  });

  it('should not allow delete from server', function () {
    Messages.remove('messageId');
  })
});
