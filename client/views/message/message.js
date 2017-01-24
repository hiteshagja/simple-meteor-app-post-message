Template.message.rendered = function () {
  $('#formPostMessage').parsley();
}

Template.message.events({
  'click #btnSaveMessage': function (e) {
    e.preventDefault();
    if ($('#formPostMessage').parsley().validate()) {
      message.insert({
        message: $('#txtMessage').val(),
        userId: Meteor.userId()
      }, function (err, res) {
        $('#txtMessage').val('');
        if (err) {
          bretError(err.message);
        }
        else {
          bertSuccess(constant.inserted);
        }
      })
    }
  },

  'click #lnkDeleteMesage': function (e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete?')) {
      Meteor.call('deleteMessage', this._id, function (err) {
        if (err) {
          bertError(err.message);
        }
        else {
          bertSuccess(constant.deleted);
        }
      })
    }
  },

  'click #lnkLogout': function (e) {
    e.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
  }
})
