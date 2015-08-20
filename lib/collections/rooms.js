Rooms = new Mongo.Collection("rooms");

Meteor.methods({
  roomInsert: function(roomAttributes) {
    check(Meteor.userId(), String);
    check(roomAttributes, {
      title: String,
      expire: Date
    });
    var user = Meteor.user();
    var room = _.extend(roomAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var roomId = Rooms.insert(room);
    return {
      _id: roomId
    };
  }
});