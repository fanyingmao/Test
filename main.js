function button(color, time) {
  let p = new Promise(function (resolve, reject) {
  setTimeout(function() {
  resolve("Timestamp: " + " Color: " + color)
  }, time);
  });
  return p;
  }
  function flash() {
  button("red", 3000) // after last task end, which means the last task will need 3s
  .then( (v) => {
  console.log(v);
  return button("yellow", 3000); // last spend 3s
  }).then( (v) => {
  console.log(v);
  return button("green", 1000); // last spend 1s
  }).then( (v) => {
  console.log(v);
  });
  } 
  flash();