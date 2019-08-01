const heapdump = require('heapdump');
var theThing = null;
var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
        if (originalThing) { }
    };
    theThing = {
        longStr: { date: "aaaaaaaaaa"+Date.now() },
        someMethod: function () { }
    };
};
setInterval(replaceThing, 100);