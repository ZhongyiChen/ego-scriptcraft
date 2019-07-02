exports.test_if_else = function(player) {
    var name = player.name;
    
    if (name.length % 2 === 0) {
      echo(player, 'even');
    } else {
        echo(player, 'odd')
    }
}
  