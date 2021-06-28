const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
name: "automod",
owner: false,
admins: false,
authorPermission: ["MANAGE_GUILD"],
run: async (client, message, args) => {

if (!args[0]) {

if (!db.has(`${message.guild.id}.automod`)) {

db.set(`${message.guild.id}.automod`, true).then(() => {

message.channel.send("No On/Off Specified, Auto-Toggled, Auto-Moderation Is Now Active!!! \n \n You Can Add Additional Auto-Moderation Features, Use: automod -h for more info!");

}).catch(e => {

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});

} else {

db.delete(`${message.guild.id}.automod`, true).then(() => {


message.channel.send("No On/Off Specified, Auto-Toggled, Auto-Moderation Is Now Active!!!");

}).catch(e => {

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});

}

} else {

const mode = args[0].toLowerCase();

switch(mode) {

case "on":
case "true":
case " enable":

db.set(`${message.guild.id}.automod`, true).then(() => {

message.channel.send("Auto-Moderation Is Now Active!!! \n \n  You Can Add Additional Auto-Moderation Features, Use: automod -h for more info!");

}).catch(e => {

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});

break;

case "off":
case "disable":
case "false":

db.delete(`${message.guild.id}.automod`, true).then(() => {

message.channel.send("Auto-Mod Is Off!!");

}).catch(e => {

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});

break;

case "-h":
case "--help":

let Help = new MessageEmbed()
.setTitle("Help Menu For Auto-Mod")
.setDescription(
`Welcome To The Help Menu, \n \n By Default If You Enable Only Auto-Moderation, It Deletes The URL Sent In This Server! \n \n  Visit [our website](www.aquatic.aquaticdev.repl.co) For More Clear Info`
)
.setColor("RANDOM")
.addFields(
{ name: "-h (or) --help", value: `Shows This Help Message` },
{ name: "-s (or) --swear", value: `Shows Some Options To Set Up Swearing Security` },
{ name: "-c (or) --captcha", value: `Enable Captcha To Send Captcha When A Member Joins The Server And Kick Them If They Didn't Respond Or Respond Wrong! [ bots excluded ]` },
{ name: "-r (or) --raid", value: `Ban People If They Try To Raid, i.e., If They Ping More Than 10 Peoples At The Same Time, Terms And Conditions Applied` }
)
.setTimestamp()
.setFooter("on (or) off to turn normal automod on/off");

message.channel.send(Help);

break;

}

}

},
};
