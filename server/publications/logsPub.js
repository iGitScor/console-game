Meteor.publish('logs', function () {
  return logs.find();
});
