import { chai } from 'meteor/practicalmeteor:chai';
import StubCollections from 'meteor/hwillson:stub-collections';
import Messages from '../../../models/message.js';

describe('Message Module', function (done) {
  var correctData = {
    message: "Inserting proper data",
    userId: "qweqweqwe"
  }
  it('should insert message', function () {
    StubCollections.stub(Messages);

    chai.assert.isString(correctData.message, 'Message not provided.');
    chai.assert.isString(correctData.userId, 'userId not defined.');

    Messages.insert(correctData, function (err, res) {
      chai.assert.isNull(err, 'Success.');
    });
    StubCollections.restore();
  });

  it('should not allow delete from client', function () {
    var testtt = Messages.remove(function(err, result){
      console.log('delete...');
      console.log(err);
      console.log(result);
    });
    console.log(testtt);
  })
});
