var sounds = require('sounds');

events.blockBreak(function(event) {
    sounds.entityWolfHowl(event.block);
});