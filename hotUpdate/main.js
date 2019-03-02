let Room;
const hotReload = require('./hotReload');
let update = function () {
  Room = require('./room');
}
update();
hotReload.watchCleanCache(require.resolve('./room'), update);

let oldRoom = new Room('old');
oldRoom.action();
setTimeout(()=>{
  let newRoom = new Room('new');
  newRoom.action();
},5000);