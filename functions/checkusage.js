function checkusage(c) {

const typefetch = c.slice(indexOf("||").trim();

const type = typefetch.slice(indexOf(":").trim();

if (type == "text") {
const max = type.slice(indexOf("/").trim();
if (max == "infi") {
return false;
}
if (!args[max]) {
return true;
} 
} else if (type == "mention") {
if (!message.mentions.users.first() || message.mentions.members.first()) {
return true;
}
}
}

module.exports = checkusage;
