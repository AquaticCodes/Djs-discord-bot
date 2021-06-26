const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
name: "leave",
owner: false,
admins: false,
category: "bot",
authorPermission: ["ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"],
run: async (client, message, args) => {

let filter = m => m.author.id === message.author.id;

let before_going = new MessageEmbed()
.setTitle(`Oh, Okay Bye Bye`)
.setDescription(`Before I Leave ${message.guild.name}, Please Send A Message In Which You May Type: \n - Why You Are Asking Bot To Leave \n - A Gentle Small Feedback \n - How May We Improve \n - Your Note [ If Any ]`)
.setColor("RANDOM");

message.channel.send(before_going).then(() => {

message.channel.awaitMessages(filter, {
max: 1,
time: 240000,
errors: ['time']
}).then(collected => {

const reason = collected.first().content;

const embed = new MessageEmbed()
.setTitle("I Was Asked To Leave");
.setDescription(`${message.guild.id} Has Asked Me To Leave The Server`)
.setColor("RANDOM")
.addFields(
{ name: "reason, feedback and additional info", value: `${reason}` }
);

const channel_embed = new MessageEmbed()
.setTitle("Bye Bye 👋")
.setDescription(`Thanks For Making Us A Part Of You ${message.guild.name}, Hopefully We May Meet Again, I Will Leave Useful Links Below!`)
.setColor("RANDOM");

/* 

Making A .then chain So Things Go In Order And Smooth!

*/

// making buttons

let invite = new MessageButton()
.setLabel("Invite Bot")
.setStyle("url")
.setURL("www.discord.com/app");

let visit = new MessageButton()
.setLabel("Offical Website")
.setStyle("url")
.setURL("www.aquatic.aquaticdev.repl.co");

let server = new MessageButton()
.setLabel("Discord Server");
.setStyle("url")
.setURL("https://discord.gg/Ce5bdksTdB");

let buttons = new MessageActionRow()
.addComponent(invite)
.addComponent(visit)
.addComponent(server)

message.channel.send({ embed: embed, component: buttons }).then(() => {
client.channels.cache.get("858245195588960266").send(embed).then(() => {

client.guilds.cache.get(`${message.guild.id}`).leave(); // leave the server

}}.catch(e => { 

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});
});
});

});

}).catch(e => { console.error(e); });

},
};
