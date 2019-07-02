var utils = require('utils');	// 工具函数模块

var DisplaySlot = org.bukkit.scoreboard.DisplaySlot;
var scoreboardManager = server.getScoreboardManager();
var board = scoreboardManager.getNewScoreboard();
var obj = board.registerNewObjective('Fighting', 'sb');

obj.setDisplaySlot(DisplaySlot.SIDEBAR);
obj.setDisplayName('Snowball Fighting');

function showToPlayer(p) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      showToPlayer(p[i]);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    showToPlayer(utils.player(p));
  } else {  // 是玩家对象
    p.setScoreboard(board);
  }
}
function setItemScore(name, score) {
  var teamName = obj.getScore(name);
  teamName.setScore(score);
}

module.exports = {
  showToPlayer: showToPlayer,
  setItemScore: setItemScore,
}