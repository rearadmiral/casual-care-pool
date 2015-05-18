Meteor.users.allow({
  update: function(userId, doc, fields, modifier) {
    return fields.length === 1 && fields[0] === 'dogs';
  }
});

if (Meteor.isClient) {

  var ProfileHelpers = {
    profileMissing: function() {
      return Meteor.user().profile === undefined;
    },
    onboardingComplete: function() {
      return !ProfileHelpers.profileMissing() && !ProfileHelpers.hasNoDogs();
    },
    hasNoDogs: function() {
      return !(Meteor.user().dogs && Meteor.user().dogs.length > 0);
    }
  };

  Template.home.helpers({ onboardingComplete: ProfileHelpers.onboardingComplete });
  Template.onboarding.helpers({ profileMissing: ProfileHelpers.profileMissing,
                                hasNoDogs: ProfileHelpers.hasNoDogs });

  Template.addDog.events({
    submit: function(event) {
      try {
        var name = event.target.name.value;
        var birthdate = event.target.birthdate.value;
        var breed = event.target.breed.value;
        var result = Meteor.users.update(
          {
            _id: Meteor.userId()
          },
          {
            $push: {
              dogs: {
                name : name,
                birthdate: birthdate,
                breed: breed
              }
            }
          }
        );
        console.log('[DEBUG] result: ' + JSON.stringify(result));
      } catch(e) {
        debugger;
      } finally {
        return false;
      }
    }
  });

  Template.aboutYou.events({
    submit: function(event) {
      try {
        var name = event.target.name.value;
        var mobileNumber = event.target.mobileNumber.value;
        var address = event.target.address.value;
        Meteor.users.update(
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
