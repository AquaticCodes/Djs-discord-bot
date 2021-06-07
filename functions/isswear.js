module.exports = is_swear;

function is_swear(string) {
  return new RegExp(`\\b(?:${badwords.join("|")})\\b`, "gi").test(string) ? true : false
}
