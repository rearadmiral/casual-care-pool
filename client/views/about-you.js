Template.aboutYou.events({
    submit: function(event) {
      try {
        var name = event.target.name.value;
        var mobileNumber = event.target.mobileNumber.value;
        var address = event.target.address.value;
        Meteor.call('updateProfile', { name: name, mobileNumber: mobileNumber, address: address });
      } finally {
        return false;
      }
    }
});