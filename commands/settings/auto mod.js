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

if (mode == "-s"||"--swear") {

let filter = m => m.author.id === message.author.id

/* 

Defined A Variable Filter For Message Author,
Proceeding for A Embed Below

*/

if (!message.guild.me.hasPermission("ADMINISTRATOR")) {

if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {

return message.lineReply("Nah, I Need A Permission To Delete Messages To Set Up This Feature, \n \n Find @Aquatic Role And Add Manage Messages/Administrator!");

} else if (!messagd.guild.me.hasPermission("MANAGE_ROLES")) {

return message.lineReply("Hey, Get This Slow, I Need To Have A Permission To Add, Remove And Manage Roles \n \n Find @Aquatic And Add Manage Roles / Administrator!");

}

}

let swearChooseEmbed = new MessageEmbed()
.setTitle("Choose A Method/App/Api/Software")
.setDescription(`1. Aquatic \n pkg-name: as \n details: This Is A Moderation Service To Ban Badwords In A Guild \n Developed By: Aquatic, No Dependencies \n \n 2. multi-lang antiswear \n pkg-name: ml-as \n Description: A Package Depended On  ez-antiswear To Make A Guild Anti-Swearable, \n Developed by: Aquatic, Ez-antiswear`)
.addField("Note", "Bot Will Wait 60 Seconds, Type The Pkg-name Given Above To Confirm A Package!")
.setColor("RANDOM");

message.channel.send(swearChooseEmbed).then(() => {

message.channel.awaitMessages(filter, {
max: 1,
time: 60000,
error: ['time']
}).then(collected => {

/* 

Collect The Option and add it to data

*/

const pkg = collected.first().content.toLowerCase();

if (pkg == "as") {

// If Aquatic was Choosen

try { // try to do stuff with database

db.set(`${message.guild.id}_swearing`, "aquatic").then(() => {

message.channel.send("Aquatic-Swear Will Take Care Of Server Now, \n \n If You Change And Equip Multi-lang Ez-antiswear, aquatic-Swear will stop working");

});

} catch(e) { // catch and execute error
message.channel.send("Database Problem, Try After A While, If Problem Persists, Meet Aquatic_Gamerz#4501");
client.users.cache.get("765151089620156418").send(e);
}

} else if (pkg == "ml-as") { 

// If Multi-lang Was Choosen

try { // try to manage database and packages

db.set(`${message.guild.id}_swearing`, "multi-lang").then(() => {

message.channel.send("Multi-Language Swearing Moderation Is Active 🔐");

} catch(e) { // error handling

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

}

} else {

// If No Valid Package Was Choosen
message.channel.send(`No Such Package ${pkg} Available`);
}

}).catch(error => {

});

}).catch(e => {

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

}

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
