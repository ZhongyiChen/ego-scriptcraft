var fireworks = require('fireworks');

exports.test_do_while = function(player) {
  do {
  	fireworks.firework(player.location);
  } while(Math.random() > .5);
}