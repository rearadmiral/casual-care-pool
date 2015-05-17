if (Meteor.isClient) {

  Template.body.events({
    "submit .aboutYou": function(event) {
      try {
        var name = event.target.name.value;
        var mobileNumber = event.target.mobileNumber.value;
        var address = event.target.address.value;
        var result = Meteor.users.update(
          {
            _id: Meteor.userId()
          },
          {
            $set: {
              profile: {
                name : name,
                mobileNumber: mobileNumber,
                address: address
              }
            }
          }
        );
      } finally {
        return false;
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
