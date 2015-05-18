ProfileHelpers = {
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