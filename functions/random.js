function choose(x) {

const array = [];

const first = x.slice(0, x.indexOf("||")).trim();

array.push(first);

const second = x.substring(x.indexOf("||") + 2).trim();

array.push(second);

array.push(first);
array.push(second);
array.push(first);
array.push(second);
array.push(first);
array.push(second);

const choosen = Math.floor(Math.random() * array.length);

return array[choosen];

}

function array(array) {

const random = Math.floor(Math.random() * array.length);

return array(random);

}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
}

function randomnumber(x, y) {
var value = Math.floor(Math.random() * x);

if (value <= y) {
value = y + 1;
}

return value;

}

function random() {
console.log("Methods Unused, Use choose | array to choose a random result between 2 things or between a array");
}

module.exports = random;
module.exports.choose = choose;
module.exports.array = array;
module.exports.key = makeid;
module.exports.number = randomnumber;
