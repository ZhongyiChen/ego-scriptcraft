var ironSword = org.bukkit.Material.IRON_SWORD;
var ItemStack = org.bukkit.inventory.ItemStack;

function giveOnlyOneSword(player) {  
  var swords = new ItemStack(ironSword, 2);

  player.inventory.clear();
  player.inventory.addItem([swords]);
}

exports.test_function = function(player) {
  player.gameMode = org.bukkit.GameMode.SURVIVAL;
  giveOnlyOneSword(player);
}
