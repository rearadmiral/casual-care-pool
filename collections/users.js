Meteor.users.allow({
  update: function(userId, doc, fields, modifier) {
    return fields.length === 1 && fields[0] === 'dogs';
  }
});