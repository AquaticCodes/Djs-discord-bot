const db = require("quick.db");

module.exports = {
name: "welcomer",
aliases: ["auto-welcome"],
owner: false,
admins: false,
category: "settings",
run: async (client, message, args) => {

if (args[0]) {

const toggle = args[0].toLowerCase();

switch(toggle) {

case "on":
case "enable":
case "true":

break;

case "off":
case "disable":
case "false":

break;

default:

}

} else {



}

},
};
