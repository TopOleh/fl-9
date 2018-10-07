//Task 1
// function assign(obj, def) {
//   obj = def;
//   for (let index = 2; index < arguments.length; index++) {
//     let arg = arguments[index];
//     let arrOfkeys = Object.getOwnPropertyNames(arg);
//     let argLength = arrOfkeys.length;
//     for (let elem = 0; elem < argLength; elem++) {
//       let currentElem = arrOfkeys[elem];
//       if (obj.hasOwnProperty(currentElem)) {
//          obj[currentElem] = arg[currentElem];
//       } else {
//         obj[currentElem] = arg[currentElem];
//       }
//     }
//   }
//   return console.log(obj);
// }
// const defaults = { a: 123, b: 777 };
// const options = { a: 456 };
// const options1 = { b: 56 };
// const options2 = { c: 76 };
// const options3 = { a: 111, b: 222 , c: 333, d : 444 };
// const configs = assign({}, defaults, options, options1, options2, options3); // {a: 456, b: 777}
// console.log(configs);

//Task 2
function Bot({
  name,
  speed,
  x,
  y
}) {
  this.name = name;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.defSpeed = speed;
}
Bot.prototype.getSpeed = function () {
  return this.speed;
}
Bot.prototype.setSpeed = function (speed) {
  this.speed = speed;
}
Bot.prototype.getDefaultSpeed = function () {
  return this.defSpeed;
}
Bot.prototype.getCoordinates = function () {
  return {
    x: this.x,
    y: this.y
  };
}
Bot.prototype.setCoordinates = function (x, y) {
  this.x = x;
  this.y = y;
}
Bot.prototype.showPosition = function () {
  return console.log('I am a Bot \'' + this.name + '\'. I am located at ' + this.x + ':' + this.y + '.');
}
Bot.prototype.move = function (direction) {
  switch (direction) {
    case 'up':
      this.y += this.speed;
      break;
    case 'down':
      this.y -= this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;
    default:
      console.log('Used uncorrect move ' + direction);
  }
}

function Racebot(name, speed, x, y) {
  Bot.call(this, name, speed, x, y);
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
Racebot.prototype.move = function (direction) {
  this.direction === direction ? this.speed++ : this.speed = this.defSpeed;
  this.direction = direction;

  switch (direction) {
    case 'up':
      this.y += this.speed;
      break;
    case 'down':
      this.y -= this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;
    default:
      console.log('Used uncorrect move ' + direction);
  }
}

function Speedbot(name, speed, x, y) {
  Bot.call(this, name, speed, x, y);
}
Speedbot.prototype = Object.create(Bot.prototype)
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.prepareEngine = function () {
  this.speed += 2;
}
Speedbot.prototype.move = function (direction) {
  switch (direction) {
    case 'up':
      this.y += this.speed;
      break;
    case 'down':
      this.y -= this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;
    default:
      console.log('Used uncorrect move ' + direction);
  }
  if (this.speed !== this.defSpeed) {
    this.speed--;
  }
}

let Botty = new Bot({
  name: 'Betty',
  speed: 2,
  x: 0,
  y: 1
});
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.


let Zoom = new Racebot({
  name: 'Lightning',
  speed: 2,
  x: 0,
  y: 1
});
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.


let Broom = new Speedbot({
  name: 'Thunder',
  speed: 2,
  x: 0,
  y: 1
});
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.