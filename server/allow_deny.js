message.allow({
  insert: function () {
    return true;
  }
});

message.deny({
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});
