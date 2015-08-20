Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('rooms'); }
});

Router.route('/', {name: 'roomsList'});

Router.route('/rooms/:_id', {
  name: 'roomPage',
  data: function() { return Rooms.findOne(this.params._id); }
});

Router.route('/submit', {name: 'roomSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'roomPage'});
Router.onBeforeAction(requireLogin, {only: 'roomSubmit'});