var slash = require('slash');	// 命令执行模块

function dress(player) {
    player.setOp(true);
    if (Math.random() > .5) {
        setTimeout(function() {
            slash([
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.head minecraft:diamond_helmet',
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.chest minecraft:diamond_chestplate',
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.legs minecraft:diamond_leggings',
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.feet minecraft:diamond_boots',
            ], player);
            player.setOp(false);
        }, 1000);
    } else {
        setTimeout(function() {
            slash([
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.head minecraft:golden_helmet',
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.chest minecraft:golden_chestplate',
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.legs minecraft:golden_leggings',
                'replaceitem entity ' 
                    + player.name 
                    +' slot.armor.feet minecraft:golden_boots',
            ], player);
            player.setOp(false);
        }, 1000);
    }
}

command('test_dress', function(parameters, player) {
    dress(player);
});