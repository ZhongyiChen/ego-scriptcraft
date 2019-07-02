var Blocks = require('blocks');
var Drone = require('drone');
exports.test_order = function(player) {
  var loc = player.location;
  var drone = new Drone(loc);
  // drone 将会按照顺序创造出 石头、铁、黄金 方块
  drone.fwd(1);
  drone.box(Blocks.stone);
  drone.fwd(1);
  drone.box(Blocks.iron);
  drone.fwd(1);
  drone.box(Blocks.gold);
}