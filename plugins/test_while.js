var Blocks = require('blocks');
var Drone = require('drone');

exports.test_while = function(player) {
    var loc = player.location;
    var drone = new Drone(loc);

    drone.fwd(3);       // 在离自己3格远的地方开始

    while (drone.getBlock().type.toString() === 'AIR' && 
    drone.down().getBlock().type.toString() !== 'AIR') {    
        drone.up();     // 先上移一格，恢复至原来的位置

        drone.box(Blocks.tnt);  // 放置tnt
        drone.left();          // 然后左移一格
        drone.box(Blocks.fire); // 放火

        drone.right();  // 右移一格，恢复列的位置
        drone.fwd(1);   // 然后，前进一格
    }
}