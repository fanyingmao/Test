class Room {
  constructor(name){
    this.name = name;
  }
  action(){
    setInterval(()=>{
      console.log(this.name + 'action A');//这里在启动后作修改成B 看热更新是否生效
    },1000);
  }
}
module.exports = Room;