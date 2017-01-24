Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    var userId = Accounts.createUser({
      email: "admin@gmail.com",
      password: "admin",
      profile: {firstName: "John", lastName: "Doe"}
    });
  }
});
