Template.addDog.events({
    submit: function(event) {
      try {
        var name = event.target.name.value;
        var birthdate = event.target.birthdate.value;
        var breed = event.target.breed.value;
        Meteor.call('addDog', { name: name, birthdate: birthdate, breed: breed });
      } finally {
        return false;
      }
    }
});