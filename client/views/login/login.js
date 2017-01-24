Template.login.rendered = function () {
  $('#formLogin').parsley();
}

Template.login.events({
  'click #btnLogin': function (e) {
    e.preventDefault();
    if ($('#formLogin').parsley().validate()) {
      Meteor.loginWithPassword($('#txtEmail').val(), $('#txtPassword').val(), function (err, res) {
        if (err) {
          bertError(err.message);
        }
        else {
          FlowRouter.go('/message');
        }
      })
    }
  }
})
