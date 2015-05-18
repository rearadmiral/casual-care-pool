Meteor.subscribe('walks');

Template.requestAWalk.helpers({
  dogNames: function() {
    var dogs = Meteor.user().dogs;
    if (dogs.length === 1) {
      return dogs[0].name;
    } else if (dogs.length === 2) {
      return dogs[0].name + ' & ' + dogs[1].name;
    }
  },
  expanded: function() {
    return Session.get('requestAWalk.expanded');
  },
  walkSchema: function() {
    return WalksSchema;
  }
});

Template.requestAWalk.events({
  'click .cancel': function() {
    Session.set('requestAWalk.expanded', false);
    return false;
  },
  'click .expand': function() {
    Session.set('requestAWalk.expanded', true);
    return false;
  }
});