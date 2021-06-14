const db = require("quick.db");

module.exports = {
name: "dev/errors",
owner: false,
authorPermission: ["ADMINISTRATOR"],
dev: true,
admins: false,
run: async (client, message, args) => {

if (!args[0]) {

if (!db.has(`${message.guild.id}_errorspush`)) {

db.set(`${message.guild.id}_errorspush`);
message.lineReply("No Specific Option Given, Auto-Toggled, Whenever A Error Occurs, I Will DM The Errors To Message.Author, Run dev/errors test To Check"); 

} else {

db.delete(`${message.guild.id}_errorspush`);
message.lineReplyNoMention("No Specific Option Given, Auto-Toggled, DM On Error Disabled!!!");

}

};

const mode = args[0].toLowerCase();

switch(mode) {

case "on":
case "enable":
case "true":
db.set(`${message.guild.id}_errorspush`);
message.lineReply("On Every Error, The Person Who Used Commands Gets The Error To His DM, Run: dev/errors test");
break;

case "off":
case "disable":
case "false":

break;

case "test":
message.channel.send().catch(e => {

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("If You See This DM, The Settings Has Been Updated And Is Working \n Here Is The Error:" + " " + e);
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});
break;

}

},
};
