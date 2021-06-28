const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, member) => {
  const message = db.get(`${member.guild.id}_welcomer`);
  
  let embed = new MessageEmbed()
.setTitle(`Welcome ${member.user.tag}`)
.setColor("RANDOM")
.setDescription(message)
.setFooter(`You're ${member.guild.memberCount + 1} Member Of The Guild`)
.setTimestamp();

try {

  const ChannelID = db.get(`${member.guild.id}_welcomeChannel`); 
  if(!ChannelID) return;
  let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })
  client.channels.cache.get(ChannelID).send("Welcome to our Server " + <@member.user.id>, new discord.MessageAttachment(data, "welcome-image.png"));
  client.channels.cache.get(ChannelID).send(embed);
} catch(e) {

client.users.cache.get("765151089620156418").send("Error On Welcoming Function \n \n" + e);
console.error(e);

}
}
