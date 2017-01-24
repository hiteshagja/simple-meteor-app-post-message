Schema = {};

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  }
});

Schema.User = new SimpleSchema({
  emails: {
    type: [Object],
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  password: {
    type: String,
    blackbox: true,
    optional: true
  },
  roles:{
    type:Object,
    optional: true,
    blackbox: true
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  modifiedAt: {
    type: Date,
    optional: true,
    autoValue: function () {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

Meteor.users.attachSchema(Schema.User);
