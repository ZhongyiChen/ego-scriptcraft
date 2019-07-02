exports.test_async = function(player) {
    setTimeout(function() {
      player.sendTitle(3, ''); 	// 放弃副标题
    }, 1000);
    setTimeout(function() {
      player.sendTitle(2, ''); 	// 放弃副标题
    }, 2000);
    setTimeout(function() {
      player.sendTitle(1, ''); 	// 放弃副标题
    }, 3000);
    setTimeout(function() {
      player.sendTitle('Go!', '', 10, 20, 10); 	// 放弃副标题
    }, 4000);
}