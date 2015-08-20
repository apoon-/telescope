Meteor.subscribe("rooms");

Meteor.startup(function() {
  Tracker.autorun(function() {
    console.log('There are ' + Rooms.find().count() + ' rooms');
  });
});