if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (BookCollection.find().count() === 0) {
      seedData();
    }
  });
}