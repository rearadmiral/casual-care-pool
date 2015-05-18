Walks = new Mongo.Collection('walks');

WalksSchema = new SimpleSchema({
  plannedAt: {
    label: 'When',
    type: Date,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
  },
  description: {
    type: String,
    label: 'Description (For You)',
    autoform: {
      afFieldInput: {
        placeholder: 'Drinks with Jen'
      }
    },
    optional: true,
    max: 100
  },
  notes: {
    type: String,
    label: 'Notes for Walker',
    optional: true,
    max: 1000,
    autoform: {
      afFieldInput: {
        placeholder: 'Please feed him dinner'
      }
    }
  }
});