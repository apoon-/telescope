if (Rooms.find().count() === 0) {
  Rooms.insert({
    title: 'Room 1',
    expire: new Date()
  });

  Rooms.insert({
    title: 'Room 2',
    expire: new Date()
  });

  Rooms.insert({
    title: 'Room 3',
    expire: new Date()
  });
}