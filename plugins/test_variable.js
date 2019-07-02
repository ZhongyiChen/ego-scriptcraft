exports.test_variable = function() {
    var name = 123;

    server.broadcastMessage('Hello, ' + name);
}