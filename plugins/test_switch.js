exports.test_switch = function(num) {
    switch (num) {
      case 1:
          server.broadcastMessage('One'.red());
          break;
      case 2:
          server.broadcastMessage('Two'.blue());
          break;
      case 3:
          server.broadcastMessage('Three'.green());
          break;
      default:
          server.broadcastMessage('Other');
    }
}