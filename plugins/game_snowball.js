var utils = require('utils');	// 工具函数模块
var slash = require('slash');	// 命令执行模块
var items = require('items'); // 物品获取模块
var scoreboard = require('scoreboard');

var Location = org.bukkit.Location;
var world = server.worlds.get(0);

var base_green = new Location(
  world, 42, 63, -786, 9.90, -175.36
);
var base_gold = new Location(
  world, 42, 63, -827, 3.75, -8.26
);

var snowballs = [
  items.snowBall(64), items.snowBall(64),
  items.snowBall(64), items.snowBall(64),
  items.snowBall(64), items.snowBall(64),
  items.snowBall(64), items.snowBall(64)
];

var names = [];
var team_green = [];	// 用于存储绿装玩家
var team_gold = [];	// 用于存储金装玩家

var score_green = 0;	// 绿队扔中敌人的次数
var score_gold = 0;	// 金队扔中敌人的次数

var hitListener = null;  // 击中事件监听器
var respawnListener = null;  // 重生事件监听器

var isStarting = false;	// 游戏默认是未开始的

command('game_snowball_join', function (parameters, player) {
  if (isStarting) {
    return;	// return 在这里的作用的结束当前函数的执行
  }
  names.push(player.name);
  if (names.length === 1) {
    isStarting = true;	// 满 1 人游戏即开始
    start();
  }
});

command('game_snowball_leave', function (parameters, player) {
  if (isStarting) {
    return;
  }
  var index = names.indexOf(player.name);
  if (index > -1) {
    names.splice(index, 1);
  }
});

events.playerQuit(function (event) {
  if (isStarting) {
    return;
  }
  var index = names.indexOf(event.player.name);
  if (index > -1) {
    names.splice(index, 1);
  }
});

function makeGroups() {
  for (var i = 0; i < names.length; i++) {
    scoreboard.showToPlayer(names[i]);
    if (i % 2 === 0) {
      team_green.push(names[i]);
    } else {
      team_gold.push(names[i]);
    }
  }
}

function dressGreen(p) {	/* 着绿装 */
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      dressGreen(p[i]);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    dressGreen(utils.player(p));
  } else if (p) {  // 是玩家对象
    p.setOp(true);
    slash([
      'replaceitem entity ' + p.name 
        +' slot.armor.head minecraft:diamond_helmet',
      'replaceitem entity ' + p.name 
        +' slot.armor.chest minecraft:diamond_chestplate',
      'replaceitem entity ' + p.name 
        +' slot.armor.legs minecraft:diamond_leggings',
      'replaceitem entity ' + p.name 
        +' slot.armor.feet minecraft:diamond_boots',
    ], p);
    p.setOp(false);
  }
}

function dressGold(p) {	/* 着金装 */
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      dressGold(p[i]);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    dressGold(utils.player(p));
  } else if (p) {  // 是玩家对象
    p.setOp(true);
    slash([
      'replaceitem entity ' + p.name 
        +' slot.armor.head minecraft:golden_helmet',
      'replaceitem entity ' + p.name 
        +' slot.armor.chest minecraft:golden_chestplate',
      'replaceitem entity ' + p.name 
        +' slot.armor.legs minecraft:golden_leggings',
      'replaceitem entity ' + p.name 
        +' slot.armor.feet minecraft:golden_boots',
    ], p);
    p.setOp(false);
  }
}

function playersBorn(p, location) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      playersBorn(p[i], location);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    playersBorn(utils.player(p), location);
  } else if (p) {  // 是玩家对象
    p.teleport(location);
  }
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
    p.inventory.addItem(snowballs)
    p.inventory.heldItemSlot = 0;
  }
}

function respawnHandler(event) {
  var player = event.player;
  
  if (team_green.indexOf(player.name) > -1) {
    dressGreen(player);
    event.setRespawnLocation(base_green);
    playersEquip(player);
  } else if (team_gold.indexOf(player.name) > -1) {
    dressGold(player);
    event.setRespawnLocation(base_gold);
    playersEquip(player);
  }
}

function hitHandler(event) {
  var target = event.entity; // 受到伤害的实体（如某个玩家）
  var tool = event.damager; // 产生伤害的实体（如雪球）
  server.broadcastMessage('tool: ' + tool);
  if (!tool) {
    return;
  }
  var source = tool.shooter; // 发出伤害的实体（如某个玩家）
  server.broadcastMessage('source: ' + source);
  if (!source) {
    return;
  }
  if (tool.name.toLowerCase() !== 'snowball') {
    return;
  }

  world.strikeLightning(target.location);
  score_green++;
  scoreboard.setItemScore('green'.green(), score_green);
  
  if (team_green.indexOf(target.name) !== -1) {
    if (team_gold.indexOf(source.name) !== -1) {
      // 绿队队员被金队队员扔中
      score_gold++;
      scoreboard.setItemScore('gold'.gold(), score_gold);
      world.strikeLightning(target.location);
    }
  } else if (team_gold.indexOf(target.name) !== -1) {
    if (team_green.indexOf(source.name) !== -1) {
      // 金队队员被绿队队员扔中
      score_green++;
      scoreboard.setItemScore('green'.green(), score_green);
      world.strikeLightning(target.location);
    }
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
    setTimeout(function() {
      p.sendTitle('Ready', ''); 	// 放弃副标题
    }, 0);
    setTimeout(function() {
      p.sendTitle('Go', '', 10, 10, 10);
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

function announceResult(p, result) {
  if (p instanceof Array) {  // 如果传进来的是数组
    for (var i = 0; i < p.length; i++) {
      announceResult(p[i], result);
    }
  } else if (typeof p === 'string') {  // 是玩家名称
    announceResult(utils.player(p), result);
  } else if (p) {  // 是玩家对象
    switch(result) {
      case 1:
        p.sendTitle('You Win', '', 10, 10, 10);
        break;
      case -1:
        p.sendTitle('You Lose', '', 10, 10, 10);
        break;
      default:
        p.sendTitle('Both Equal', '', 10, 10, 10);
    }
  }
}

function end() {
  if (score_green > score_gold) {  // 绿队赢了
    announceResult(team_green, 1);
    announceResult(team_gold, -1);
  } else if (score_green < score_gold) {  // 金队赢了
    announceResult(team_green, -1);
    announceResult(team_gold, 1);
  } else {  // 平了
    announceResult(team_green, 0);
    announceResult(team_gold, 0);
  }
}

function reset() {
  if (hitListener) {
    hitListener.unregister();
  }
  if (respawnListener) {
    respawnListener.unregister();
  }
  
  names = [];
  team_green = [];
  team_gold = [];
  score_green = 0;
  score_gold = 0 ;
  
  isStarting = false;
}

function start() {
  respawnListener = events.playerRespawn(respawnHandler);
  hitListener = events.entityDamageByEntity(hitHandler);
  
  // 先分队
  makeGroups();
  // 给所有玩家同样的装备
  playersEquip(names);
  // 给完装备后再着装
  dressGreen(team_green);
  dressGold(team_gold);
  // 给各队出生位置
  playersBorn(team_green, base_green);
  playersBorn(team_gold, base_gold);

  prepare(names);

  setTimeout(function() {
    countdown(10);  // 倒计时
  }, 50000);
  setTimeout(function() {
    end();	// 结束函数
    reset();	// 重置数据
  }, 60000);
}