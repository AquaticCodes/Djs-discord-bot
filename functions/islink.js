module.exports = is_url;

function is_url(str) {
return /(https|http):\/\/[\S]+/gi.test(str) ? true : false
}
