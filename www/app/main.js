define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    var alertt = require('alert');

    alertt("my message");

    print(messages.getHello());
});
