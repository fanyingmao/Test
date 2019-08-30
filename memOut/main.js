<<<<<<< HEAD
const heapdump = require('heapdump');
=======
// forever start -c "node --inspect=172.31.0.1:8025" ./memOut/main.js
// node --inspect=172.31.0.1:8025 ./memOut/main.js

>>>>>>> ff
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
<<<<<<< HEAD
setInterval(replaceThing, 100);
=======
setInterval(replaceThing, 1000);
>>>>>>> ff
