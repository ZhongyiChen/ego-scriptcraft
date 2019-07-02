var world = server.worlds.get(0);
var entityType = org.bukkit.entity.EntityType.CHICKEN;

exports.test_for = function(player) {
  var loc = player.location;
  
  for (var i = 0; i < 10; i++) {
  	world.spawnEntity(loc, entityType);
  }
}