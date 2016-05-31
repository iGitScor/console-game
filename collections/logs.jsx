// Define a collection to hold our logs
Logs = new Mongo.Collection('logs');

// Methods' policies
Logs.allow({
  insert: function () {
    return true;
  },

  update: function () {
    return false;
  },

  remove: function () {
    return false;
  },
});

// Contents' policies
Logs.attachSchema(
  new SimpleSchema({
    text: {
      type: String,
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
    },
  })
);
