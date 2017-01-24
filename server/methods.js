Meteor.methods({
  deleteMessage: function (messageId) {
    message.remove(messageId);
  }
})
