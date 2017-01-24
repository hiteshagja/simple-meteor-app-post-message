FlowRouter.triggers.enter(
  [trackRouteEntry],
  {except: ['login']}
);

FlowRouter.route('/', {
  name: 'login',
  action: function() {
    BlazeLayout.render('login');
  }
});

FlowRouter.route('/message', {
  name: 'message',
  action: function() {
    BlazeLayout.render('message');
  }
});

function trackRouteEntry() {
  if (!Meteor.userId()) {
    FlowRouter.redirect('/');
  }
};
