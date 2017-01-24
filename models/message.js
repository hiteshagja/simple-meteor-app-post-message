message = new Mongo.Collection('message');

var Schema = {};

Schema.message = new SimpleSchema({
  message: {
    type: String,
    optional: false
  },
  userId: {
    type: String,
    optional: false
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
})

message.attachSchema(Schema.message);

messagetable = {};

Meteor.isClient && Template.registerHelper('messagetable', messagetable);

messagetable.message = new Tabular.Table({
  name: "MEssage table",
  collection: message,
  "order": [[2, 'desc']],
  columns: [
    {
      title: 'Message',
      data: 'message'
    },
    {
      title: 'User',
      data: 'userId',
      render: function (val) {
        return Meteor.users.findOne(val).profile.firstName;
      }
    },
    {
      title: 'Date',
      data: 'createdAt',
      render: function (val) {
        return moment(val).format('L');
      }
    },
    {
      title: 'Delete',
      tmpl: Meteor.isClient && Template.messageDelete
    }
  ]
})

module.exports = message;
