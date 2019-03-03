let Room;
const hotReload = require('./hotReload');

hotReload.require(require.resolve('./room'), (requireObj)=>{
  Room = requireObj;
});

let oldRoom = new Room('old');
oldRoom.action();
setTimeout(()=>{//5s 后实例化新的房间对象，在这5s间修改 room.js 的代码
  let newRoom = new Room('new');
  newRoom.action();
},5000);