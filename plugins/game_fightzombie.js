var utils = require('utils');	// 工具函数模块
var items = require('items'); // 物品获取模块
var slash = require('slash');	// 命令执行模块
var scoreboard = require('scoreboard');

var GameMode = org.bukkit.GameMode;
var Location = org.bukkit.Location;
var world = server.worlds.get(0);

var names = [];
var dead_names = [];		// 已死亡玩家
var swords = [items.diamondSword(1)];
var isStarting = false;
var scoreObj = {};  // 只需要声明一个空对象即可哦

var fight_base = new Location(
  world, -4.5, 90.0, -890.8, -4.200, 180.298
);
var watch_base = new Location(
  world, -4.453, 102.0, -901.751, 66.300, -1.497
);
var enemy_base_1 = new Location(
  world, -4.4, 90.0, -917.4, -3.000, 0.448
);
var enemy_base_2 = new Location(
  world, -17.6, 90.0, -903.6, -1.650, -90.452
);
var enemy_base_3 = new Location(
  world, 9.1, 90.0, -903.4, -3.150, -90.298
);
var end_base = new Location(
  world, -5.555, 94.5, -887.593, 5.250, 183.148
);

var breakListener = null;  // 破坏事件监听器
var damageListener = null;  // 攻击事件监听器
var deathListener = null;  	// 死亡事件监听器
var respawnListener = null;	// 重生事件监听器
var commandListener = null; // 执行命令事件监听器

var countdownTimer = null;
var endTimer = null;
var generateZombiesTimer = null;

command('game_fightzombie_join',
  function (parameters, player) {
    if (isStarting) {
      return;	// return 在这里的作用的结束当前函数的执行
    }
    names.push(player.name);
    server.broadcastMessage('[' + names.length + '/3] game_figthzombie');
    if (names.length === 1) {
      isStarting = true;	// 满 1 人游戏即开始
      start();
    }
});

command('game_fightzombie_leave',
  function (parameters, player) {
    if (isStarting) {
      return;
    }
    var index = names.indexOf(player.name);
    if (index > -1) { names.splice(index, 1); }
  });

events.playerQuit(function (event) {
  if (isStarting) {
    return;
  }
  var index = names.indexOf(event.player.name);
  if (index > -1) { names.splice(index, 1); }
});

function breakHandler(event) {
  if (!event.player) {  // 如果不是玩家在破坏方块
    return;		// 那就什么都不做
  }
  if (names.indexOf(event.player.name) > -1) {
    // 来到这里则说明破坏方块的是加入了游戏的玩家
    event.setCancelled(true);
  }
}

function commandHandler(event) {
  if (!event.player) {
    return;
  }
  if (names.indexOf(event.player.name) === -1) {
    return;
  }
  event.setCancelled(true);
}

function start() {
  commandListener = events.playerCommandPreprocess(commandHandler);
  deathListener = events.playerDeath(deathHandler);
  respawnListener = events.playerRespawn(respawnHandler);
  damageListener = events.entityDamageByEntity(damageHandler);
  breakListener = events.blockBreak(breakHandler);

  playersEquip(names);
  setGameMode(names, GameMode.SURVIVAL);
  // goToBase(names, fight_base);
  goToBase(names, end_base);

  scoreboard.showToPlayer(names);
  world.setTime(world.getFullTime() / 2);
  prepare(names);
  setTimeout(generateZombies, 3000);
  
  countdownTimer = setTimeout(function() {
    countdown(10);  // 倒计时(待添加)
  }, 50000);
  endTimer = setTimeout(function() {
    end();	// 结束函数(待添加)
  }, 60000);
}

function playersEquip(p) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      playersEquip(p[i]);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    playersEquip(utils.player(p));
  } else if (p) {  // 是玩家对象
    p.inventory.clear();
    p.inventory.addItem(swords);
    p.setOp(true);
    slash('qa give barrett', p);
    p.inventory.heldItemSlot = 1;
  }
}

function setGameMode(p, gameMode) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      setGameMode(p[i], gameMode);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    setGameMode(utils.player(p), gameMode);
  } else if (p) {  // 是玩家对象
    p.gameMode = gameMode;
  }
}

function goToBase(p, location) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      goToBase(p[i], location);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    goToBase(utils.player(p), location);
  } else if (p) {  // 是玩家对象
    p.teleport(location);
  }
}

function prepare(p) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      prepare(p[i]);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    prepare(utils.player(p));
  } else if (p) {  // 是玩家对象
    p.sendTitle('Ready', ''); 	// 放弃副标题
    setTimeout(function() {
      p.sendTitle('Go', '', 10, 20, 10);
    }, 500);
  }
}

function countdown(second) {
  server.broadcastMessage('Only left ' + second + 's');
  
  var leftSecond = second - 1;
  
  if (leftSecond <= 0) {
    return;
  }
  setTimeout(function() {
    countdown(leftSecond);
  }, 1000);
}

function generateZombies() {
  if (!isStarting) {
    clearTimeout(timer);
    return;
  }
  world.spawnEntity(enemy_base_1, entities.zombie());
  // world.spawnEntity(enemy_base_2, entities.zombie());
  // world.spawnEntity(enemy_base_3, entities.zombie());
  generateZombiesTimer = setTimeout(generateZombies, 5000);
}

function damageHandler(event) {
  if (!event.getDamager) { return; }
  if (!event.getEntity) { return; }
  var damager = event.getDamager();	// 获取攻击者
  var damagee = event.getEntity();	// 获取被攻击者
  // 如果攻击者不是玩家那就什么都不做
  if (names.indexOf(damager.name) < 0) { return; }
  // 如果受攻击者也是玩家，则取消事件
  if (names.indexOf(damagee.name) > -1) {  
    event.setCancelled(true);
    return;
  }
  var name = damager.name;
  if (!scoreObj[name]) {
    scoreObj[name] = 1;
  } else {
    scoreObj[name]++;
  }
  server.broadcastMessage('score: ' + scoreObj[name]);
  scoreboard.setItemScore(name, scoreObj[name]);
}

function deathHandler(event) {
  var player = event.getEntity();	// 获取死掉的玩家
  var name = player.name;
  if (names.indexOf(name) === -1) {
    return;
  }
  // 如果玩家已经死亡过，那就什么都不做
  if (dead_names.indexOf(name) > -1) {
    return;
  }
  dead_names.push(name);
  if (dead_names.length === name.length) {	// 死光了
    end();	// 游戏结束【待完成】
  }
}

function respawnHandler(event) {
  var player = event.player;	// 获取重生的玩家
  if (names.indexOf(player.name) === -1) {
    return;
  }
  // 把玩家移送到观察点
  event.setRespawnLocation(watch_base);
}

function end() {
  goToBase(names, end_base);
  world.setTime(0);
  announceResult(names);
  resetData();
}

function announceResult(p) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      announceResult(p[i]);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    announceResult(utils.player(p));
  } else if (p) {  // 是玩家对象
    var result = dead_names.length < names.length ?
     'Win!!' : 'Fail.';
    p.sendTitle(
      result,
      'Kill zombies: ' + (+scoreObj[p.name])
    );
    p.setOp(false);	// 宣布结果后，移除玩家的管理员权限
  }
}

function resetData() {
  names = [];
  dead_names = [];
  scoreObj = {};
  
  if (breakListener) { breakListener.unregister(); }
  if (damageListener) { damageListener.unregister(); }
  if (deathListener) { deathListener.unregister(); }
  if (respawnListener) { respawnListener.unregister(); }
  if (commandListener) { commandListener.unregister(); }
  
  if (countdownTimer) { clearTimeout(countdownTimer); }
  if (endTimer) { clearTimeout(endTimer); }
  if (generateZombiesTimer) {
    clearTimeout(generateZombiesTimer);
  }
  
  isStarting = false;
}