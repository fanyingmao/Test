global.ChannelMap = {
    "0": {
      "id": "0",
      "name": "全部"
    },
    "1_30000": {
      "id": "1_30000",
      "name": "h5"
    },
    "1_1598254202794840": {
      "id": "1_1598254202794840",
      "name": "好游快爆"
    },
    "1_1598253793118470": {
      "id": "1_1598253793118470",
      "name": "4399游戏盒"
    }
  }
  
  global.ChannelList = [];
  for(var i in global.ChannelMap){
    global.ChannelList.push(global.ChannelMap[i]);
  }
  console.log(global.ChannelList);