class Room {
  constructor(name){
    this.name = name;
  }
  action(){
    setInterval(()=>{
      console.log(this.name + 'action A');
    },1000);
  }
}
module.exports = Room;