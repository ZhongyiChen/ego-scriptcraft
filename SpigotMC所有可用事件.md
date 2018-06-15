# events.blockBreak()   当一个方块被玩家破坏的时候，调用本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 破坏方块的玩家。
- isDropItems() `方法` 获取方块是否会掉落物品。
- setDropItems(boolean dropItems) `方法` 设置这个方块是否像平常那样掉落物品。
- setExpToDrop(int exp) `方法` 设置这个方块会掉落多少经验。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockBurn()    当一个方块被火烧掉的时候触发此事件。
回调函数中的 event 参数包含的字段有：
- getBlock() `方法` 获取被点燃的方块（例如树叶）。
- getIgnitingBlock() `方法` 获取点燃这个方块的方块（例如火球）。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockCanBuild()    当玩家尝试建造一个方块时候，可以通过掉用本事件看到玩家是否可以在此建造它。
回调函数中的 event 参数包含的字段有：
- getBlock() `方法` 获取我们正试图放置在其上面的方块，注意，这方块不是我们试图放置的方块。
- getMaterial() `方法` 获取我们试图放置的方块的 Material 。
- isBuildable() `方法` 获取是否可以在此建造此方块 默认情况下, 是否可以在此建造返回的是 Minecraft 服务器设置的值。
- setBuildable(boolean cancel) `方法` 设置此方块是否可以在此建造。

# events.blockDamage()    当方块被玩家损坏时，调用本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 损坏方块的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBlock() `方法` 获取被损坏的方块（例如花草方块）。
- getItemInHand() `方法` 获取当前玩家手上的物品。
- getInstaBreak() `方法` 如果方块在被玩家损坏时是被立即破坏的（像创造模式那样），返回true，反之false。
- setInstaBreak(boolean bool) `方法` 想要方块在被玩家损坏时被立即破坏（就像创造模式那样），请设置true，反之false。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockDispense()    当物品被方块(比如发射器,投掷器等)射出时，调用本事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 发射器本身（这里使用 getBlock() 方法也能拿到该对象）。
- getItem() `方法` 获取被射出的物品（例如火焰弹）。
- getVelocity() `方法` 获取物品射出的速度、角度（即向量）。
- setVelocity(Vector vel) `方法` 设置物品射出的速度、角度（即向量）。
- setItem(ItemStack item) `方法` 设置被射出的物品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockExp()   方块产生经验的时候（比如煤矿被被打破会掉落经验）时触发本事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 产生经验的方块（这里使用 getBlock() 方法也能拿到该对象）。
- getExpToDrop() `方法` 在事件被执行之后获取方块掉落的经验数量。
- setExpToDrop(int exp) `方法` 设置这个方块在事件被执行之后会掉落多少经验。

# events.blockExplode()   当方块爆炸时，调用本事件（不知何原因，暂时未能试验出该事件的有效性）。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 引起爆炸的方块，如 TNT （这里使用 getBlock() 方法也能拿到该对象）。
- blockList() `方法` 返回被炸毁的方块的列表（数组）。
- getYield() `方法` 返回这次爆炸炸毁的方块掉落的可能性（返回的结果是百分比浮点数）。
- setYield(float yield) 设置这次爆炸炸毁的方块掉落的可能性（设置的值是百分比浮点数）。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockFade()    当方块因为自然条件消退，融化，消失（比如冰雪融化、木块被焚）时，触发本事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 消退方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getNewState() `方法` 获取因为世界条件消退，融化，消失的方块的状态。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockForm()    当一个方块因为自然变化被放置、更改或者蔓延时（比如下雪形成雪块），触发此事件
回调函数中的 event 参数包含的字段有：
- block `对象引用` 新形成的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getNewState() `方法` 获取方块的当前状态。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockFromTo()    当液体流动/龙蛋自己传送时（即源方块到目标方块），触发该事件
回调函数中的 event 参数包含的字段有：
- block `对象引用` 移动的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getFace() `方法` 获取方块想要移动到的朝向。
- getToBlock() `方法` 获取方块要移动到的地方，返回的也是一个方块对象。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockGrow()    当一个方块在世界中自然生长的时（如小麦生长），触发此事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 生长的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getNewState() `方法` 获取方块生长之后的新状态。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockIgnite()    当一个方块被点燃时，触发该事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 被点燃的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getCause() `方法` 获取点燃方块的原因。
- getIgnitingBlock() `方法` 获取点燃方块的方块（例如火把）。
- getIgnitingEntity() `方法` 获取点燃方块的实体，如果不是实体点燃的返回null。
- getPlayer() `方法` 获取点燃方块的玩家，如果不是玩家点燃的就返回null。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockMultiPlace()    当玩家放置一个方块，而导致实际放置两个方块时（例如玩家放置一个床，床会占据两个方块大小），触发本事件。该事件继承了 BlockPlace 事件
回调函数中的 event 参数包含的字段有：
- getReplacedBlockStates() `方法` 获取所有新放置的方块的方块状态（这些方块中的大多数方块状态都是空气）。

# events.blockPhysics()   当方块产生物理变化（例如沙子掉落）时，触发本事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 被改变物理状态的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getChangedType() `方法` 获取事件中被改变的方块的种类。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockPistonExtend()    当活塞臂推出时，触发该事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 活塞方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getBlocks() `方法` 获取被活塞移动的不可改变的方块列表。

# events.blockPistonRetract()   当活塞臂缩回时，触发该事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 活塞方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getBlocks() `方法` 获取被活塞移动的不可改变的方块列表。

# events.blockPlace()   当一个方块被玩家放置时，触发此事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 被放置的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- canBuild() `方法` 获取这个方块是否可以建造。
- setBuild(boolean canBuild) `方法` 设置这个方块是否可以被放置。
- getBlockAgainst() `方法` 获取这个方块是依附在哪个方块上放置的，返回的是被依附的那个方块。
- getBlockPlaced() `方法` 获得被放置的方块（还未真正被放置）。
- getBlockReplacedState() `方法` 获取方块被放置后的方块状态。
- getHand() `方法` 获取放置这个方块的手。
- getItemInHand() `方法` 获取玩家放置的方块的物品形式（在玩家手上）。
- getPlayer() `方法` 获得是哪个玩家放置的这个方块。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.blockRedstone()    当方块接受到的红石信号变化时，触发此事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 接受红石信号的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getNewCurrent() `方法` 获取这个方块收到的红石信号强度将要变成的值（0~15）。
- getOldCurrent() `方法` 获取这个方块之前的红石信号强度（0~15）。
- setNewCurrent(int newCurrent) `方法` 设置这个方块收到的红石信号强度将要变成的值（0~15）。

# events.blockSpread()    当一个方块基于自然法则地蔓延时触发此事件（比如菌丝的蔓延、火的蔓延）。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 因蔓延而出现的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getSource() `方法` 获取这个事件中蔓延的源方块。

# events.cauldronLevelChange()    当蒸锅等级发生变化时，触发此事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 蒸锅方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getEntity() `方法` 获取哪个实体触发该事件,值有可能为Null。
- getNewLevel() `方法` 获取新的等级数值。
- getOldLevel() `方法` 获取旧的等级数值。
- setNewLevel(int newLevel) `方法` 手动设置蒸锅的等级数值。
- getReason() `方法` 获取蒸锅等级数值变化原因，返回一个原因对象。

# events.entityBlockForm()    当玩家用方块搭建成实体时，调用本事件（用雪块、南瓜搭建成一个雪傀儡时；用铁块、南瓜搭建成一个铁傀儡时）。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 获取被建造的实体。

# events.leavesDecay()    当树叶消失时，触发此事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 树叶方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.notePlay()   音符盒播放音符（玩家点击/红石触发）时，触发此事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 音乐盒方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getInstrument() `方法` 获取要播放的音符的乐器，会返回一个音乐器对象。
- setInstrument(Instrument instrument) `方法` 设置播放音符用的乐器。
- getNote() `方法` 获取要播放的音符。
- setNote(Note note) `方法` 设置要播放的音符。

# events.signChange()   当玩家设置牌子上的内容子时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getLine(int index) `方法` 获得牌子被写上的内容的某行，返回的是一个字符串。
- getLines() `方法` 获得牌子被写上的全部内容，返回的是一个字符串数组。
- getPlayer() `方法` 获得设置这个牌子上的字的玩家。
- setLine(int index, java.lang.String line) `方法` 修改牌子被写上的字的某行。

# events.enchantItem()    当附魔台里的物品成功附魔时，触发此事件。
回调函数中的 event 参数包含的字段有：
- getEnchantBlock() `方法` 获取 附魔这个物品 的方块。
- getEnchanter() `方法` 获取 附魔这个物品 的玩家。
- getEnchantsToAdd() `方法` 获取被加到物品中的附魔的Map (等级, 附魔种类)，返回一个 Map 集合（若要修改请直接修改Map）。
- getExpLevelCost() `方法` 获取花费的附魔等级数值。
- getItem() `方法` 获取被附魔的物品(可自定义)。
- setExpLevelCost(int level) `方法` 设置花费的附魔等级。
- whichButton() `方法` 获取玩家点击的附魔的按钮。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.prepareItemEnchant()   当物品被塞入附魔台时，触发此事件（可以同时调用）。
回调函数中的 event 参数包含的字段有：
- getEnchantBlock() `方法` 获取附魔台方块。
- getEnchanter() `方法` 获取正在为物品附魔的玩家。
- getEnchantmentBonus() `方法` 获取附魔的效果整数值（对应于书架中的数值）。
- getItem() `方法` 获取准备附魔的物品（可改动）。
- getOffers() `方法` 获取对玩家可用的附魔贡品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.areaEffectCloudApply()   当滞留药水应用它的效果时，触发本事件。（期间每5 tick发生一次）
回调函数中的 event 参数包含的字段有：
- getAffectedEntities() `方法` 获取一个受影响实体的可变列表。特别注意不是在列表里的每个实体都保证受影响。药水效果云可能由于 AreaEffectCloud.getDurationOnUse() 或 AreaEffectCloud.getRadiusOnUse() 的消耗死在应用过程中。
- getEntity() `方法` 返回这个事件所涉及的实体。

# events.creatureSpawn()    当一个生物体在世界中出生时，触发该事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，返回一个实体对象。
- getLocation() `方法` 返回生物出生的位置，返回一个位置对象。
- getSpawnReason() `方法` 返回生物出生的原因，返回一个原因对象。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.creeperPower()   当爬行者被闪电击中时，触发该事件。
回调函数中的 event 参数包含的字段有：
- getCause() `方法` 返回爬行者被强(弱)化的原因。
- getEntity() `方法` 返回这个事件所涉及的实体，即爬行者。
- getLightning() `方法` 返回击中爬行者的闪电。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.enderDragonChangePhase()   当末影龙变更了控制器阶段时，触发此事件。
回调函数中的 event 参数包含的字段有：
- getCurrentPhase() `方法` 获取末影龙所处的当前阶段。
- getEntity() `方法` 返回这个事件所涉及的实体，即末影龙。
- getNewPhase() `方法` 获取末影龙即将变更到的阶段。
- setNewPhase(EnderDragon.Phase newPhase) `方法` 为末影龙设置新的阶段。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityAirChange()    当实体的氧气值发生变化时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体。
- getAmount() `方法` 获取实体剩余的氧气值（单位为刻）。
- setAmount(int amount) `方法` 设置实体剩余的氧气值（单位为刻）。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityBreakDoor()    当实体破坏门时触发本事件
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即破坏门的实体。
- getBlock() `方法` 返回这个事件所涉及的方块，即被破坏的门。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件，取消该事件将导致该事件被延迟。

# events.entityBreed()    当一个实体繁殖出另外一个实体时，触发此事件。
回调函数中的 event 参数包含的字段有：
- getBredWith() `方法` 如果存在被用来引起繁殖的物品，则返回该物品（类型为ItemStack），否则返回null。
- getBreeder() `方法` 获取发出繁殖行为的相关实体。
- getEntity() `方法` 返回被繁殖出来的实体。
- getExperience() `方法` 获取繁殖行动中所给予的经验数值。
- setExperience(int experience) `方法` 设置繁殖行动中所给予的经验数值。
- getFather() `方法` 获取新生实体的父亲。
- getMother() `方法` 获取新生实体的母亲。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityChangeBlock()    当一个非玩家的实体在改变方块时，调用该事件。
回调函数中的 event 参数包含的字段有：
- getBlock() `方法` 返回被改变之前的方块。
- getTo() `方法` 返回改变后的材料（Material）类。
- getEntity() `方法` 返回改变方块的实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityCombustByBlock()   当方块造成实体燃烧时（例如某个生物喷到岩浆），触发该事件。
回调函数中的 event 参数包含的字段有：
- getCombuster() `方法` 返回造成燃烧的方块，可以是岩浆或者一个着火的方块。
- getEntity() `方法` 返回被燃烧的实体。
- getDuration() `方法` 返回燃烧会持续的秒数。
- setDuration(int duration) `方法` 设置燃烧会持续的秒数。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityCombustByEntity()    当一个实体造成另外一个实体燃烧时，触发该事件。
回调函数中的 event 参数包含的字段有：
- getCombuster() `方法` 返回造成燃烧的实体。
- getEntity() `方法` 返回被燃烧的实体。
- getDuration() `方法` 返回燃烧会持续的秒数。
- setDuration(int duration) `方法` 设置燃烧会持续的秒数。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityCombust()    当实体燃烧时，触发该事件（事实上，上面的 entityCombustByBlock 和 entityCombustByEntity 正是继承了此事件接口）。
回调函数中的 event 参数包含的字段有：
- getDuration() `方法` 返回燃烧会持续的秒数。
- setDuration(int duration) `方法` 设置燃烧会持续的秒数。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityCreatePortal()   当一个生物实体在世界中创建传送门时，触发该事件。
回调函数中的 event 参数包含的字段有：
- getBlocks() `方法` 返回与这个传送门有关的所有方块。
- getEntity() `方法` 返回这个事件所涉及的实体。
- getPortalType() `方法` 返回正在尝试创建的传送门类型。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityDamageByBlock()    当一个实体受到来自方块的伤害时，触发该事件。
回调函数中的 event 参数包含的字段有：
- getDamager() `方法` 返回使实体受到伤害的方块。
- getEntity() `方法` 返回受到伤害的实体。

# events.entityDamageByEntity()   当一个实体受到另外一个实体伤害时，触发该事件（参数跟上面的 entityDamageByBlock 差不多）。
回调函数中的 event 参数包含的字段有：
- getDamager() `方法` 返回造成此次伤害的实体。
- getEntity() `方法` 返回受到伤害的实体。

# events.entityDamage()   不用于直接监听，而是作为其他事件的父类。主要用于储存伤害事件的数据。
回调函数中的 event 参数包含的字段有：
- getCause() `方法` 获取实体受到伤害的原因，返回的对象类型为 EntityDamageEvent.DamageCause 。
- getDamage() `方法` 获取实体在本次事件受到伤害的值。
- getDamage(EntityDamageEvent.DamageModifier type) `方法` 获取实体在受到此类型伤害时的伤害值。
- setDamage(double damage) `方法` 设置实体在本次事件中受到的伤害值。
- setDamage(EntityDamageEvent.DamageModifier type, double damage) `方法` 设置实体在受到该类型伤害时的伤害值。
- getOriginalDamage(EntityDamageEvent.DamageModifier type) `方法` 获取指定伤害类型的原始伤害值。
- getFinalDamage() `方法` 获取实体最终的伤害值（经过护甲等的修改）。
- isApplicable(EntityDamageEvent.DamageModifier type) `方法` 该方法将检查特定的伤害原因是否是本次触发的原因。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityDeath()    当任何一个实体死亡时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getDroppedExp() `方法` 返回这个死亡的实体掉落的经验数量。
- setDroppedExp(int exp) `方法` 设置这个实体死亡所掉落的经验值数量。
- getDrops() `方法` 返回这实体死亡掉落物品的集合。
- getEntity() `方法` 返回这个事件所涉及的实体。

# events.entityExplode()    当任何一个实体爆炸时，触发本事件。
回调函数中的 event 参数包含的字段有：
- blockList() `方法` 返回被将移除或已被这次爆炸移除的方块列表。
- getLocation() `方法`返回爆炸发生的位置。
- getYield() `方法` 返回这次爆炸掉落方块占所有影响到的方块的百分比。
- setYield(float yield) `方法` 设置这次爆炸掉落的方块的百分比。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityInteract()    当一个实体与其他物体互交时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getBlock() `方法` 返回实体交互的方块。
- getEntity() `方法` 返回实体本身。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityPickupItem()    当一个实体从地上捡起物品时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getItem() `方法` 返回被实体捡起的物品。
- getEntity() `方法` 返回这个事件所涉及的实体。
- getRemaining() `方法` 如果地上还留有一定数量的该类物品，则返回该数值。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityPortalEnter()    当一个实体与传送门接触时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getLocation() `方法` 获取实体接触的传送门方块的所在位置。
- getEntity() `方法` 返回这个事件所涉及的实体。

# events.entityPortal()    当一个非玩家的实体被传送门传送时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getPortalTravelAgent() `方法` 返回本次事件中所使用的传送代理（travel agent），没有的话返回 null 。
- setPortalTravelAgent(TravelAgent travelAgent) `方法` 设置本次事件中所使用的传送代理。
- useTravelAgent() `方法` 返回Travel Agent是否启用 如果此项别设置为 true，TravelAgent将尝试寻找一个EntityTeleportEvent.getTo()位置附近的一个传送门。若没有传送门将尝试创建一个传送门。
- useTravelAgent(boolean useTravelAgent) `方法` 设置Travel Agent是否启用 如果此项别设置为true,TravelAgent将尝试寻找一个EntityTeleportEvent.getTo()位置附近的一个传送门 若没有传送门将尝试创建一个传送门。
- getEntity() `方法` 返回这个事件所涉及的实体。
- getFrom() `方法` 返回实体被传送前的位置。
- getTo() `方法` 返回实体被传送后的位置。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityPortalExit()    当一个实体离开传送门时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getAfter() `方法` 获取实体离开传送门方块后将产生的速度向量副本。
- getBefore() `方法` 获取实体进入传送门方块前所拥有的速度向量副本。
- setAfter(Vector after) `方法` 设置实体离开传送门方块后将产生的速度向量。
- getEntity() `方法` 返回这个事件所涉及的实体。

# events.entityRegainHealth()    用于存储重新获得健康的事件的数据。
回调函数中的 event 参数包含的字段有：
- getAmount() `方法` 返回重新获得的健康值。
- setAmount(double amount) `方法` 设置重新获得的健康值。
- getRegainReason() `方法` 返回实体重新获得健康的原因。
- getEntity() `方法` 返回这个事件所涉及的实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityResurrect()    当一个实体死亡时，若有几乎被复活，则触发本事件。如果死亡的实体没有装备图腾，则本事件会以一种被取消的方式触发。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即死亡实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityShootBow()    当一个生命实体用弓发射一支箭时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getBow() `方法` 返回被用来发射箭的弓。
- getEntity() `方法` 返回这个事件所涉及的实体。
- getForce() `方法` 返回箭被发射时的力量值。
- getProjectile() `方法` 返回本次事件中的被发射物，即箭。
- setProjectile(Entity projectile) `方法` 设置本次事件中的被发射物，即替换掉原来的发射物。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityTame()    当一个生命实体被驯服时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getOwner() `方法` 返回驯服者，即动物的所有者。
- getEntity() `方法` 返回这个事件所涉及的实体，即被驯服的实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityTarget()    当一个生物追踪或放弃追踪另外一个实体时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getReason() `方法` 返回实体被追踪的原因。
- getTarget() `方法` 返回被追踪的实体。
- setTarget(Entity target) `方法` 设置你希望被生物所追逐的实体。
- getEntity() `方法` 返回发起追踪的实体，即生物。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityTargetLivingEntity()    当一个实体追踪一个生物实体时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getReason() `方法` 返回实体被追踪的原因。
- getTarget() `方法` 返回被追踪的实体。
- setTarget(Entity target) `方法` 设置你希望被实体所追逐的生物实体。
- getEntity() `方法` 返回发起追踪的实体，即生物。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityTeleport()    当一个非玩家实体（例如末影人）尝试从一个位置转移到另外一个位置时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getFrom() `方法` 返回实体转移前的位置。
- getTo() `方法` 返回实体转移后的位置。
- setFrom(Location from) `方法` 设置实体转移前的位置。
- setTo(Location to) `方法`  设置实体转移后的位置。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityToggleGlide()    当一个实体变换滑翔状态（例如玩家在半空中按下起跳键(通常是空格)，而使用鞘翅飞行或滑翔落地）时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回此次事件相关的实体。
- isGliding() `方法` 返回实体是否在滑翔。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.entityUnleash()    当一个实体被释放时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回此次事件相关的实体，即被释放的实体。
- getReason() `方法` 返回实体被释放的原因。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.expBottle()    当一个投掷瓶击碎并释放出经验时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回此次事件相关的实体，即投掷瓶。
- getExperience() `方法` 返回投掷瓶所创建的经验数量。
- setExperience(int exp) `方法` 设置投掷瓶所创建的经验数量。
- getShowEffect() `方法` 返回此次事件是否显示粒子效果。
- setShowEffect(boolean showEffect) `方法` 设置此次事件是否显示粒子效果。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.explosionPrime()    当一个实体下定决心要爆炸（爆炸初期）时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回此次事件相关的实体。
- getFire() `方法` 返回此次爆炸是否创建火。
- setFire(boolean fire) `方法` 设置此次爆炸是否创建火。
- getRadius() `方法` 返回此次爆炸的半径。
- setRadius(float radius) `方法` 设置此次爆炸的半径。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.fireworkExplode()    当烟花爆炸时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即烟花本身。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.foodLevelChange()    当一个人类实体的饥饿值发生变化时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即人类本身。
- getFoodLevel() `方法` 获取本事件涉及的实体将被设置的饥饿值，20为饱和状态，0为饥饿状态。
- setFoodLevel(int level) `方法` 设置实体将被设置的饥饿值。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.horseJump()    当马跳起时，调用此事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即马本身。
- getPower() `方法` 获取起跳的力量值。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。

# events.itemDespawn()    当一个物件存在大约5分钟后，被从世界中移除时，触发本事件。（即如果希望一个物件存在世界上超过5分钟，就需要取消该事件，未来可能会取消该操作）
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即物件本身。
- getLocation() `方法` 获取正在消失的物件的位置。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.itemMerge()    当一个物品和另外一个物品合并时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即主物品。
- getTarget() `方法` 返回主物品正在合并的物品实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.itemSpawn()    当世界中生成一个新物品时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即新物品。
- getLocation() `方法` 返回新物品的位置。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.lingeringPotionSplash()    当一剂延迟的飞溅药水碰到一块区域时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即药水本身。
- getAreaEffectCloud() `方法` 获取本事件所生成的效果云实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.pigZap()    当一头猪被电击成一头僵尸猪时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即变成僵尸前的猪。
- getLightning() `方法` 击中猪的闪电。
- getPigZombie() `方法` 返回这个事件所造成的实体，即变成僵尸的猪。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerDeath()    当一个玩家死亡时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即死亡的玩家。
- getDeathMessage() `方法` 获取广播给所有人的死亡提示。
- setDeathMessage(java.lang.String deathMessage) `方法` 设置广播给所有人的死亡提示。
- getKeepInventory() `方法` 返回玩家死亡后是否保留储物箱的物品。
- setKeepInventory(boolean keepInventory) `方法` 设置玩家重生后后能否保留储物箱的物品。
- getKeepLevel() `方法` 返回玩家死亡后是否保留所有经验并在重生后恢复。
- setKeepLevel(boolean keepLevel) `方法` 设置玩家重生后后能否保留储物箱的物品。
- getNewExp() `方法` 获取玩家重生时有多少经验值。
- setNewExp(int exp) `方法` 设置玩家重生时有多少经验值。
- getNewLevel() `方法` 获取玩家重生时有多少等级。
- setNewLevel(int level) `方法` 设置玩家重生时有多少等级。
- getNewTotalExp() `方法` 获取玩家重生时总共该有多少经验。
- setNewTotalExp(int totalExp) `方法` 设置玩家重生时总共该有多少经验。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerLeashEntity()    当一个生物被一个玩家释放时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即生物。
- getLeashHolder() `方法` 返回持有该生物的实体，例如枷锁。
- getPlayer() `方法` 返回释放生物的实体，即玩家。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.lingeringPotionSplash()    当一剂延迟的飞溅药水碰到一块区域时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即药水本身。
- getAffectedEntities() `方法` 获取收到影响的实体列表。
- getIntensity(LivingEntity entity) `方法` 获取该实体遭受药水的效果的强度数值。（这与距离有关）
- getPotion() `方法` 获取造成这次事件的飞溅药水实体。
- setIntensity(LivingEntity entity, double intensity) `方法` 重写某个实体所遭受到的效果强度数值。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.projectileHit()    当一个抛射物击中了一个目标时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即抛射物本身。
- getHitBlock() `方法` 获取被击中的方块，如果被击中的不是方块，则返回 null 。
- getHitEntity() `方法` 获取被击中的实体，如果被击中的不是实体，则返回 null 。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.projectileLaunch()    当一个抛射物被发射时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即发射物本身。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.sheepDyeWool()    当一头羊的毛被染色后，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即羊本身。
- getColor() `方法` 获取羊被染上的颜色对象。
- setColor(DyeColor color) `方法` 设置羊被染上的颜色对象。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.sheepRegrowWool()    当一头羊重新长出毛后，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即羊本身。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.slimeSplit()    当史莱姆死亡后分裂成小史莱姆时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即死亡前的史莱姆本身。
- getCount() `方法` 获取生成的小史莱姆的数量。
- setCount(int count) `方法` 设置生成的小史莱姆的数量。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.villagerAcquireTrade()    当一个村民请求一次新的贸易时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即村民本身。
- getRecipe() `方法` 获取将被玩家取得的物品材料。
- setRecipe(MerchantRecipe recipe) `方法` 设置将被玩家取得的物品材料。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.villagerAcquireTrade()    当由于玩家的贸易导致一个村民最大贸易量被增加时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即村民本身。
- getBonus() `方法` 获取被增加的使用利息数值。
- setBonus(int bonus) `方法` 设置被增加的使用利息数值。
- getRecipe() `方法` 获取被补充的物品材料。
- setRecipe(MerchantRecipe recipe) `方法` 设置被补充的物品材料。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.hangingBreakByEntity()    当一个悬挂实体被一个实体移除时，调用本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即悬挂实体本身。
- getRemover() `方法` 获取移除这个悬挂实体的实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.hangingBreak()    当一个悬挂实体被移除时，调用本事件。
回调函数中的 event 参数包含的字段有：
- getCause() `方法` 获取这个悬挂实体被移除的原因。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.hangingBreakByEntity()    当一个悬挂实体被放置时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getEntity() `方法` 返回这个事件所涉及的实体，即悬挂实体本身。
- getBlock() `方法` 返回这个悬挂实体被放置在哪个方块上。
- getBlockFace() `方法` 返回这个悬挂实体被放置在的方块的朝向。
- getPlayer() `方法` 返回放置这个悬挂实体的玩家。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.brew()    当酿造完成时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 酿造台本身（这里使用 getBlock() 方法也能拿到该对象）。
- getContents() `方法` 获取此事件中的酿造台的物品栏列表。
- getFuelLevel() `方法` 返回剩下的燃料等级数值。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.brewingStandFuel()    当一个物品被用来添加到酿造台作为燃料时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 酿造出来的方块本身（这里使用 getBlock() 方法也能拿到该对象）。
- getFuel() `方法` 获取被用来作为燃料的物品。
- getFuelPower() `方法` 获取被用来作为燃料的物品的能量数值。
- setFuelPower(int fuelPower) `方法` 设置被用来作为燃料的物品的能量数值。
- isConsuming() `方法` 获取酿造台的燃料是否将被消耗。
- setConsuming(boolean consuming) `方法` 设置酿造台的燃料是否将被消耗。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.craftItem()    当一个物品被合成时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- getInventory() `方法` 获取此事件涉及的主要物品栏。
- getRecipe() `方法` 获取合成该物品所用的物品清单。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.furnaceBurn()    当一个物品作为燃料被扔到炉子里燃烧时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 炉子本身（这里使用 getBlock() 方法也能拿到该对象）。
- getBurnTime() `方法` 获取此燃料的燃烧时间数值。
- setBurnTime(int burnTime) `方法` 设置此燃料的燃烧时间。
- getFuel() `方法` 获取这个事件中的燃料。
- isBurning() `方法` 获取熔炉中的燃料是否正在燃烧。
- setBurning(boolean burning) `方法` 设置熔炉中的燃料是否正在燃烧。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.furnaceExtract()    当玩家从熔炉取出产物时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 炉子本身（这里使用 getBlock() 方法也能拿到该对象）。
- getPlayer() `方法` 获取触发这个事件的玩家。
- getItemAmount() `方法` 获取被取出的物品的数量。
- getItemType() `方法` 获取被取出的物品的类型，即材料。
- getExpToDrop() `方法` 获取此事件会掉落多少经验数值。
- setExpToDrop(int exp) `方法` 设置此事件会掉落多少经验数值。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.furnaceSmelt()    当一个物品被熔炼完毕时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- block `对象引用` 炉子本身（这里使用 getBlock() 方法也能拿到该对象）。
- getResult() `方法` 获取熔炼产物。
- setResult(ItemStack result) `方法` 设置熔炼产物。
- getSource() `方法` 获取被熔炼的物品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventoryClick()    当玩家点击物品栏中的格子时，触发此事件。（事实上打开任意容器的物品栏(包括玩家的背包)后点击任何一个地方都会触发这个事件）
* 由于InventoryClickEvent是通过修改物品栏 的实现类来触发的，所以并非所有与物品栏相关的方法都是安全的。
* 下面这些属于 HumanEntity和 InventoryView 的方法不应该被处理 InventoryClickEvent 事件的事件处理器调用
* HumanEntity.closeInventory()
* HumanEntity.openInventory(Inventory)
* HumanEntity.openWorkbench(Location, boolean)
* HumanEntity.openEnchanting(Location, boolean)
* InventoryView.close()
* 如果一定要调用这些方法，请使用 BukkitScheduler.runTask(Plugin, Runnable)来执行 ，这个方法将在下一个tick执行你的任务。
* 假设与该事件关联的人类实体是一个玩家实例，则操作储物箱的方法为 Player.updateInventory() 。
回调函数中的 event 参数包含的字段有：
- getAction() `方法` 获取触发此次事件的储物箱动作。
- getClick() `方法` 获取本事件的点击类型。
- getCurrentItem() `方法` 获取被点击的格子的物品。
- setCurrentItem(ItemStack stack) `方法` 设置被点击的格子的物品。
- getCursor() `方法` 获取当前光标所指的物品。
- getHotbarButton() `方法` 如果ClickType是NUMVER_KEY（按下数字切换物品），这个方法将返回按下的键的索引（0-8）。
- getRawSlot() `方法` 返回点击的原始格子序号，可传递给 getItem(int) 使用。
- getSlot() `方法` 返回点击的格子序号，可传递给 Inventory.getItem(int) 使用。
- getSlotType() `方法` 获取被点击的格子的类型。
- isLeftClick() `方法` 获取是否左击背包。
- isRightClick() `方法` 获取是否右击背包。
- isShiftClick() `方法` 获取是否按住 shift 键点击背包。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventoryClose()    当玩家关闭背包时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getPlayer() `方法` 获取涉及此事件的玩家。

# events.inventoryCreative()    当一个玩家处于创造模式，放下或捡起一个物品到储物箱或者将储物箱的物品放进工具栏时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- getCursor() `方法` 获取当前光标所指的物品。
- setCursor(ItemStack item) `方法` 设置当前光标所指的物品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventoryDrag()    当一个玩家在储物箱中拖散某类物品时，触发这个事件。
* 由于InventoryClickEvent是通过修改物品栏 的实现类来触发的，所以并非所有与物品栏相关的方法都是安全的。
* 下面这些属于 HumanEntity和 InventoryView 的方法不应该被处理 InventoryClickEvent 事件的事件处理器调用
* HumanEntity.closeInventory()
* HumanEntity.openInventory(Inventory)
* HumanEntity.openWorkbench(Location, boolean)
* HumanEntity.openEnchanting(Location, boolean)
* InventoryView.close()
* 如果一定要调用这些方法，请使用 BukkitScheduler.runTask(Plugin, Runnable)来执行 ，这个方法将在下一个tick执行你的任务。
* 假设与该事件关联的人类实体是一个玩家实例，则操作储物箱的方法为 Player.updateInventory() 。
回调函数中的 event 参数包含的字段有：
- getCursor() `方法` 获取当前光标所指的物品。
- setCursor(ItemStack item) `方法` 设置当前光标所指的物品。
- getInventorySlots() `方法` 获取这次拖拽造成变化的所有插槽。
- getNewItems() `方法` 获取在这次拖拽中被添加到储物箱的所有物品。
- getOldCursor() `方法` 获取当前光标在拖拽事件之前的物品。
- getRawSlot() `方法` 返回点击的原始格子序号，可传递给 getItem(int) 使用。
- getType() `方法` 获取这次事件的拖拽类型。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventory()    代表与玩家相关的物品栏事件，通常只用于作为其他事件的父类。
回调函数中的 event 参数包含的字段有：
- getInventory() `方法` 获取此事件涉及的主要物品栏。
- getView() `方法` 获取物品栏本身的 InventoryView 对象。
- getViewers() `方法` 获取正在查看此主要/顶部物品栏的玩家列表。

# events.InventoryInteract()    当一个玩家与物品栏进行交互时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- getResult() `方法` 获取此次事件的结果。
- getWhoClicked() `方法` 获取执行该动作的玩家。
- setResult(Event.Result newResult) `方法` 设置此次事件的结果。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventoryMoveItem()    当一个玩家或者方块（例如跳虫）尝试直接从一个物品栏移动物品动另外一个物品栏时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- getDestination() `方法` 获取目标物品栏，即物品将被移动到该物品栏。
- getSource() `方法` 获取源物品栏，即物品将被从该物品栏移走。
- getInitiator() `方法` 移动该物品的实体。
- getItem() `方法` 被移动的物品。
- setItem(ItemStack itemStack) `方法` 设置被移动的物品，如果该物品被设置成和原来不一样的物品，则原来的物品被被保留在源物品栏。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventoryOpen()    当玩家打开物品栏时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getPlayer() `方法` 返回涉及此事件的玩家。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.inventoryPickupItem()    当漏斗/漏斗矿车收起掉落的物品时，触发本事件。
回调函数中的 event 参数包含的字段有：
- getInventory() `方法` 获取捡起这个物品的背包。
- getSource() `方法` 获取源物品栏，即物品将被从该物品栏移走。
- getItem() `方法` 获取被捡起的物品实体。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.prepareAnvil()   当物品放入铁砧内，并且可以合成出物品的时候，触发该事件。
回调函数中的 event 参数包含的字段有：
- getInventory() `方法` 获取捡起这个物品的背包。
- getResult() `方法` 获取预合成时铁砧即将打造出来的物品，可能为空。
- setResult(ItemStack result) `方法` 设置预合成时铁砧即将打造出来的物品。

# events.prepareItemCraft()   当将物品放入合成台准备合成时，触发该事件。
回调函数中的 event 参数包含的字段有：
- getInventory() `方法` 获取此事件涉及的主要物品栏（合成物品栏）。
- getRecipe() `方法` 获取用于合成的清单。
- isRepair() `方法` 用于检测该事件是否由工具修理操作触发而非合成清单触发。

# events.asyncPlayerChat()    当玩家聊天时，触发这个事件。
* 构造器提供了一个表示事件同步触发还是异步触发的布尔值。 当异步时，本事件可以被任何线程调用，无主线程，访问API受限。
* 如果玩家通过传入的聊天数据包导致触发本事件，本事件将是异步的。 如果一个插件通过迫使玩家聊天（比如 Player.chat ）而触发本事件，本事件将是同步的。
* 应注意通过 Event.isAsynchronous() 检查本事件是同步的还是异步的，适当地处理本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 消息发送者。（这里使用 getPlayer() 方法也能拿到该对象）
- getFormat() `方法` 获取用于展示这条字符消息的格式。
- setFormat(java.lang.String format) `方法` 设置用于展示这条字符消息的格式。
- getMessage() `方法` 获得这个玩家试图发送的信息。
- setMessage(java.lang.String message) `方法` 设置这个玩家将发送的信息。
- getRecipients() `方法` 获取一个将看到这条消息的玩家的集合。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.asyncPlayerChat()    当玩家尝试登录服务器时，此事件主要用于存储尝试登录的玩家的详细信息。
* 这个事件是异步的，不在主线程上执行。
回调函数中的 event 参数包含的字段有：
- allow() `方法` 允许玩家登录。
- disallow(AsyncPlayerPreLoginEvent.Result result, java.lang.String message) `方法` 以给定的理由不允许玩家登录。
- getAddress() `方法` 获取玩家的IP地址。
- getKickMessage() `方法` 获取将要使用的踢出消息。
- setKickMessage(java.lang.String message) `方法` 设置将要使用的踢出消息。
- getLoginResult() `方法` 获取登录的状态。
- setLoginResult(AsyncPlayerPreLoginEvent.Result result) `方法` 设置登录的状态。
- getName() `方法` 获取玩家的名字。
- getUniqueId() `方法` 获取玩家的唯一标识。

# events.playerAdvancementDone()   当一个玩家完成了升一级所需的所有任务时，触发该事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 升级的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getAdvancement() `方法` 获取玩家完成的升级（类型为 Advancement ）。

# events.playerAnimation()    当玩家进行某个动作时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 发出此动作的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getAnimationType() `方法` 获得此事件中玩家的动作类型。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerArmorStandManipulate()    当一个玩家操作衣架时，触发这个事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 操作衣架的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getArmorStandItem() `方法` 获取挂在衣架上的物品。
- getPlayerItem() `方法` 获取玩家持有的物品。
- getRightClicked() `方法` 获取被玩家点击的实体，即衣架。
- getSlot() `方法` 返回在这次事件中衣架格子里原来的物品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerBedEnter()    玩家躺在床上时，触发此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 躺在床上的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBed() `方法` 返回此事件涉及的床。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerBedLeave()    玩家离开床时，触发此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 离开床的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBed() `方法` 返回此事件涉及的床。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerBucketEmpty()    玩家用完一只桶后，触发此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 用完桶的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBlockClicked() `方法` 玩家正在对着哪个方块使用桶，返回那个方块。（继承自 playerBucket 事件）
- getBlockFace() `方法` 获取方块被点击的面。（继承自 playerBucket 事件）
- getBucket() `方法` 返回玩家手里的桶的类型。（继承自 playerBucket 事件）
- getItemStack() `方法` 返回使用桶之后会得到的物品堆叠。（继承自 playerBucket 事件）
- setItemStack(ItemStack itemStack) `方法` 设置使用桶之后会得到的物品堆叠。（继承自 playerBucket 事件）
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerBucket()    当玩家使用桶时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 用完桶的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBlockClicked() `方法` 玩家正在对着哪个方块使用桶，返回那个方块。
- getBlockFace() `方法` 获取方块被点击的面。
- getBucket() `方法` 返回玩家手里的桶的类型。
- getItemStack() `方法` 返回使用桶之后会得到的物品堆叠。
- setItemStack(ItemStack itemStack) `方法` 设置使用桶之后会得到的物品堆叠。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerBucketFill()    水桶装满水后，触发此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 装桶的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBlockClicked() `方法` 玩家正在对着哪个方块使用桶，返回那个方块。（继承自 playerBucket 事件）
- getBlockFace() `方法` 获取方块被点击的面。（继承自 playerBucket 事件）
- getBucket() `方法` 返回玩家手里的桶的类型。（继承自 playerBucket 事件）
- getItemStack() `方法` 返回使用桶之后会得到的物品堆叠。（继承自 playerBucket 事件）
- setItemStack(ItemStack itemStack) `方法` 设置使用桶之后会得到的物品堆叠。（继承自 playerBucket 事件）
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerChangedMainHand()    当玩家在客户端设置改变主手时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 改变主手的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getMainHand() `方法` 获取玩家的新主手。旧的主手依然可以在此期间通过 HumanEntity.getMainHand() 获取到。

# events.playerChangedWorld()    当玩家在客户端设置改变主手时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 切换到另外一个世界的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getFrom() `方法` 获得玩家切换到目标世界之前所在的世界。

# events.playerChatTabComplete()    当玩家尝试补全聊天消息时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 尝试补全聊天消息的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getChatMessage() `方法` 获取将被补全的聊天消息。
- getLastToken() `方法` 获取被补全消息的最后一个'标记'（String 类型）。
- getTabCompletions() `方法` 获取所有补全项集合（String List 类型）。

# events.playerCommandPreprocess()    当一个玩家执行一个命令（也就是在聊天框里面输入信息以/开头的时候，算作命令）时，触发本事件。
* 这个事件是早于插件的onCommand接收的命令的。
* 如果你此时调用setMessage(String)方法的话,其他插件收到的命令将会是你更改以后的命令。
* 如果没必要，请避免使用此事件。
* 如果该事件满足条件被取消掉,对应的命令将会无法发挥任何作用。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 执行命令的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getMessage() `方法` 获取所发送的命令的所有字符串。
- setMessage(java.lang.String command) `方法` 设置玩家即将要发送的命令的字符串。虽然所获取的命令字符串会带有一个“/”，但你设置命令的时候，不用再输入这个“/”。
- setPlayer(Player player) `方法` 设置这个命令的执行者。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerDropItem()    当玩家丢出物品时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 丢出物品的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getItemDrop() `方法` 获得此玩家丢出的物品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerEditBook()    当玩家编辑或签名图书时，触发此事件。如果事件中断取消，图书和笔的元数据不会改变。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 编辑图书的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getNewBookMeta() `方法` 获取玩家试图新增的书本元数据。
- setNewBookMeta(BookMeta newBookMeta) `方法` 设置新增的书本元数据。
- getPreviousBookMeta() `方法` 获取当前书本元数据。
- getSlot() `方法` 获取触发事件时，书本在物品栏所在的格子序号。
- isSigning() `方法` 检测书本是否正在被签名。
- setSigning(boolean signing) `方法` 设置书本是否正在被签名。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerEggThrow()    玩家抛出鸡蛋时，触发本事件，鸡蛋可能孵化。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 抛出鸡蛋的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getEgg() `方法` 获取事件中的鸡蛋。
- getHatchingType() `方法` 获取将被孵化的生物类型（默认为EntityType.CHICKEN）。
- setHatchingType(EntityType hatchType) `方法` 修改将被孵化生物的类型。
- getNumHatches() `方法` 检测将被孵化生物的数量。
- setNumHatches(byte numHatches) `方法` 改变将被孵化生物的数量。
- isHatching() `方法` 检测鸡蛋是否将被孵化。
- setHatching(boolean hatching) `方法` 设置鸡蛋是否将被孵化。

# events.playerExpChange()    当玩家经验值发生变化时，调用此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 此事件中的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getAmount() `方法` 获得玩家将要获得的经验数值。
- setAmount(int amount) `方法` 设置玩家将要获得的经验数值。

# events.playerFish()    当玩家钓鱼时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 钓鱼的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getCaught() `方法` 获取被玩家钓到的实体。
- getExpToDrop() `方法` 返回玩家钓鱼时所获得的经验数值。
- setExpToDrop(int amount) `方法` 修改玩家钓鱼时所获得的经验数值。
- getHook() `方法` 获取鱼钩。
- getState() `方法` 获取当前垂钓的状态。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerGameModeChange()    当玩家游戏模式发生变化时，调用此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 发生模式变化的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getNewGameMode() `方法` 获取玩家切换后的游戏模式。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerInteractAtEntity()    当玩家在实体上点击它的某位置时，触发此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 点击某个实体的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- clickedEntity `对象引用` 被点击的实体。（这里使用 getRightClicked() 方法也能拿到该对象），继承自 playerInteractEntity 事件。
- getClickedPosition() `方法` 获取被点击的位置向量。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerInteractEntity()    当玩家点击一个实体时，调用此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 点击某个实体的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- clickedEntity `对象引用` 被点击的实体。（这里使用 getRightClicked()) 方法也能拿到该对象）
- getHand() `方法` 获取用于执行这次交互的手。（该方法继承自 playerInteract 事件）
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerInteract()    当玩家对一个对象或空气进行交互时，触发本事件。可能在左右手交互时也会触发。
* 你可以使用 getHand() 方法来确定是哪只手。
* 如果是原版行为触发了本事件, 则本事件将会被取消（例如与空气进行交互）
回调函数中的 event 参数包含的字段有：
- player `对象引用` 进行交互的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getAction() `方法` 获取本次交互的类型。
- getBlockFace() `方法` 返回被点击的方块的朝向。
- getClickedBlock() `方法` 返回被点击的方块。
- setUseInteractedBlock(Event.Result useInteractedBlock)  `方法` 设置这次被交互的方块。
- getHand() `方法` 获取用来执行本次交互的手, 但当 getAction() 为 Action.PHYSICAL 时可能为空。
- getItem() `方法` 获取本事件玩家手中的物品, 手中物品为空时会返回 null 。
- getMaterial() `方法` 方便的方法，返回由此事件表示的物品的材质。
- hasBlock() `方法` 检查这个事件是否涉及到一个方块。
- hasItem() `方法` 检查这个事件是否涉及一个物品。
- isBlockInHand() `方法` 返回这个事件触发是否由放置方块所触发的。
- useInteractedBlock() `方法` 该方法会得到在对方块进行点击后（如果有的话）所采取的动作。
- useItemInHand() `方法` 该方法会得到玩家拿着的物品的动作。
- setUseItemInHand(Event.Result useItemInHand) `方法` 设置交互手中的方块。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。取消此事件会阻止玩家吃东西(玩家不会失去食物), 阻止弓箭/雪球/蛋发射...(玩家不会失去弹药)

# events.playerItemBreak()    某玩家工具耐久消耗完毕时（比如铲子，打火石，铁制工具），调用此事件。当物品耐久值为0时，将触发此事件。事件结束后，物品耐久值将复位至0。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 持有该工具的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getBrokenItem() `方法` 获得因耐久值不足将要被销毁的物品。

# events.playerItemConsume()    当玩家消耗一个物品时（例如实物、药水、牛奶桶），触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 消耗物品的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getItem() `方法` 获取被将被消耗的物品。
- setItem(ItemStack item) `方法` 设置被将被消耗的物品。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerItemConsume()    当玩家手持某物品时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 手持物品的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getNewSlot() `方法` 获得玩家此次手持物品的物品槽位置（索引）。
- getPreviousSlot() `方法` 获得玩家上一次手持物品的物品槽位置。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerJoin()    当玩家进入服务器时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 进入服务器的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getJoinMessage() `方法` 获取玩家加入游戏后发送给全体玩家的信息。
- setJoinMessage(java.lang.String joinMessage) `方法` 设置玩家加入游戏后发送给全体玩家的信息。

# events.playerKick()    当玩家被服务器踢出时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 被服务器踢出的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getLeaveMessage() `方法` 获取某玩家被踢出后，发送给全体玩家的离开消息。
- setLeaveMessage(java.lang.String leaveMessage) `方法` 设置某玩家被踢出后，发送给全体玩家的离开消息。
- getReason() `方法` 获取踢出的玩家的理由。
- setReason(java.lang.String kickReason) `方法` 设置踢出的玩家的理由。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerLevelChange()    当玩家等级改变时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 等级值发生改变的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getNewLevel() `方法` 获得此玩家要改变成的等级值。
- getOldLevel() `方法` 获得此玩家改变之前的经验值。

# events.playerLocaleChange()    当玩家改变他们的语言设置时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 改变语言的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getLocale() `方法` 获取玩家选择的语言。

# events.playerLogin()    当玩家尝试登录时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 尝试登录的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- allow() `方法` 允许玩家登录。
- disallow(PlayerLoginEvent.Result result, java.lang.String message) `方法` 以给定的理由不允许玩家登录。
- getAddress() `方法` 获取玩家的IP地址。
- getHostname() `方法` 获取玩家用于连接服务器的主机名，如果未知则为空。
- getKickMessage() `方法` 如果玩家被拒绝登录，则可通过该方法获取被踢出的原因。
- setKickMessage(java.lang.String message) `方法` 如果玩家被拒绝登录，则可通过该方法设置被踢出的原因。
- getResult() `方法` 获取当前的登录状态。
- setResult(PlayerLoginEvent.Result result) `方法` 设置当前的登录状态。

# events.playerMove()    当玩家移动时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 在移动的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getFrom() `方法` 得到玩家移动到此位置之前的位置。
- setFrom(Location from) `方法` 设置玩家将要移动到此位置之前的位置。
- getTo() `方法` 得到玩家移动到的位置。
- setTo(Location to) `方法` 设置玩家将要移动的位置。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerPickupArrow()   当玩家从地上捡起箭时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 捡起箭的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getArrow() `方法` 获取玩家捡起的箭。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerPortal()    玩家将要被传送门传送时，触发本事件。（其他实体被传送门传送的事件请见 entityPortal 事件）
回调函数中的 event 参数包含的字段有：
- player `对象引用` 将要被传送的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getPortalTravelAgent() `方法` 获得玩家在这个事件中使用的传送门。
- setPortalTravelAgent(TravelAgent travelAgent) `方法` 设置玩家在这个事件中使用的传送门。
- useTravelAgent() `方法` 得到是否让玩家传送到另一端的传送门。
- useTravelAgent(boolean useTravelAgent) `方法` 设置是否让玩家传送到另一端的传送门。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。

# events.playerQuit()    玩家离开服务器时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 离开服务器的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getQuitMessage() `方法` 获取某玩家离开游戏后，发送给全体玩家的离开消息。
- setQuitMessage(java.lang.String quitMessage) `方法` 设置某玩家离开游戏后，发送给全体玩家的离开消息。

# events.playerRegisterChannel()    玩家注册通信通道之后，立即触发此事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 注册通信通道的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getChannel() `方法` 获取通信通道。

# events.playerResourcePackStatus()    当玩家对通过 Player.setResourcePack(java.lang.String) 发起的资源包请求动作时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 发起的资源包请求动作的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getStatus() `方法` 获取这个资源包的状态。

# events.playerRespawn()    玩家重生时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 重生的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getRespawnLocation() `方法` 获取当前重生的位置。
- setRespawnLocation(Location respawnLocation) `方法` 设置一个新的重生位置。
- isBedSpawn() `方法` 获取此玩家是否在他的床上重生。

# events.playerShearEntity()    玩家剪羊毛时，触发本事件。
回调函数中的 event 参数包含的字段有：
- player `对象引用` 剪羊毛的玩家。（这里使用 getPlayer() 方法也能拿到该对象）
- getEntity() `方法` 获得正在被玩家剪羊毛的实体对象。
- isCancelled() `方法` 该事件是否已经被取消。一个被取消的事件不会在服务器里被执行，但是仍然会传递事件到其他插件。
- setCancelled(boolean cancel) `方法` 取消这个事件。
