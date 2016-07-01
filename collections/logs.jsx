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
    action: {
      type: String,
      denyUpdate: true,
    },
    text: {
      type: String,
    },
    owner: {
      type: String,
      denyUpdate: true,
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
    },
  })
);
