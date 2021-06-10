function choose(x) {

const array = [];

const first = x.slice(0, indexOf("||")).trim();

array.push(first);

const second = x.substring(x.indexOf("||") + 2).trim();

array.push(second);

const choosen = Math.floor(Math.random() * array.length);

return array[choosen];

}

function array(array) {

const random = Math.floor(Math.random() * array.length);

return array(random);

}

function random() {
console.log("Methods Unused, Use choose | array to choose a random result between 2 things or between a array");
}

module.exports = random;
module.exports.choose = choose;
module.exports.array = array;
