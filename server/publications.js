Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, {fields: {dogs: true}});
});

Meteor.publish('walks', function () {
  return Walks.find();
});