const { MessageButton, MessageActionRow } = require('discord-buttons'); // To require only certain extensions that actually do the work!
const { MessageEmbed } = require("discord.js");

module.exports = {
name: "developercontact",
aliases: ["devcontact"],
owner: false,
admins: false,
incognito: false,
category: "info",
run: async (client, message, args) => {

let button = new MessageButton()
.setLabel("Website")
.setStyle("url")
.setUrl("https://aquatic.aquaticdev.repl.co");

let embed = new MessageEmbed()
.setTitle("Developer Of Aquatic Bot");
.setColor("RANDOM")
.addFields(
{ name: "Why?", value: `Well No Idea, i have many aims basically to make own os, apps, etc etc.. and yeah i found discord and nodejs [ JavaScript ] as a great start :)` },
{ name: "aims", value: `make a operating system, make a own browser, become a great developer and hacker are my main aims in programming.. others i have many likely to solve all mysteries of world` },
{ name: "data", value: `Real Name: Chaturya Reddy \n Age: 15 [ when finish this project ] \n location: Really? is it necessary? \n Contact: website link below` }
)
.setDescription("
Aquatic Bot, A Project Of Aquatic Gamerz Was Initially An Idea To Make A Personal Bot For His Server, later he thought to make the bot public and made necessary changes..
\n As He Was Having Not Enough Intrest He Boosted Himself The Interest In Different Ways Yet Unsuccessful.. On Such Time He Got A Idea Of Making It Open-Source Bot, i.e., The Code Of The Bot Is Public And Can Be Used/ Downloaded Or Modified According To User Needs!!! \n \n
He Uploaded The File Code In The Github Link Below, the command and event handler idea was by dbd amd more youtuber, credits too given below :) \n Thanks For Using Aquatic Bot Or Its Code \n \n - Aquatic Gamerz
");

message.channel.send(button).then(() => {
message.channel.send(embed).catch(e => { 
console.error(e); 
return message.lineReply("Error Occurred!!!");
}
}.catch(e => { 
console.error(e);
message.channel.send(`Buttons Error, Please Retry \n \n Check If Bot Has Permissions To Send Attachmentes and embeds alternatively use checkperms command!!`);
}

},
};
