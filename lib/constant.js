constant = {
  inserted: 'Message inserted successfully.',
  deleted: 'Message deleted successfully.'
}

bertError = function(message) {
  Bert.alert({
    hideDelay: 10000,
    type: 'danger',
    style: 'growl-top-right',
    message: message,
    icon: 'fa-exclamation'
  });
}

bertSuccess = function(message) {
  Bert.alert({
    hideDelay: 10000,
    type: 'success',
    style: 'growl-top-right',
    message: message,
    icon: 'fa-check'
  });
}
