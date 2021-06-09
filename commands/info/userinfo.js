const { MessageEmbed } = require("discord.js");
const ms = require("pretty-ms")
const moment = require("moment")

module.exports = {
  name: "userinfo",
  aliases: ["whois"],
  owner: false,
  incognito: true,
  guild: true,
  category: "info",
  run: async (client, message, args) => {
    var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');
    var user = message.mentions.users.first() || message.author
    const member = message.guild.member(user);

    var age = Date.now() - user.createdAt
    
    let embed = new MessageEmbed()
    .setTitle(`${message.author.username} asked ${user.username}'s info`)
    .setDescription("All The Information Is Below")
    .addFields(
      { name: "General", value: [
        `Name: ${user.username}`,
        `Tag: ${user.tag}`,
        `User: ${user}[<@${user.id}>]`,
        `User ID: ${user.id}`,
        `Bot: ${user.bot}`,
        `Joined Discord At: ${user.createdAt}`,
        `Discord Age: ${ms(age)}`,
        `Avatar[pfp][dp]: [click here](${user.displayAvatarURL()})`
]},
{ name: "Guild Perspective", value: [
  
  `NickName: ${member.nickname !== null ? `${member.nickname}` : 'None'}`,
`Joined Server At: ${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`
  
  ]},
  { name: "Presence", value: [
    
  `Status [ presence ]: ${user.presence.status}`,
  `Game: ${user.presence.game ? user.presence.game.name : 'None'}`
    
    ]}
      )
      .addField("Roles:", member.roles.cache.map(r => '<@&'+r.id+'>').slice(0, -1).join(" "))
      .addField("Highest Role", member.roles.highest)
                    .setColor("#00FFEF")
      .setThumbnail(client.user.avatarURL())
      .setAuthor(message.author.name, message.author.avatarURL())
      .setFooter(`${message.author.username}#${message.author.discriminator} asked this in ${message.guild.name}`)
      .setTimestamp(d);
    
    
    message.channel.send(embed)
    
  }
}
