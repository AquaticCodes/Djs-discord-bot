function checkusage(c) {

const typefetch = c.slice(indexOf("||").trim();

const type = typefetch.slice(indexOf(":").trim();

if (type == "text") {
const max = type.slice(indexOf("/").trim();
if (max == "infinite") {
return false;
}
if (!args[max]) {
return true;
} else if (args[max + 1]) {
return true;
}
}

}
