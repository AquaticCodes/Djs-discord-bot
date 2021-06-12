const { MessageEmbed } = require("discord.js");
const ms = require("pretty-ms")

module.exports = {
  name: "info",
  aliases: ["botinfo"],
  owner: false,
  guild: false,
  incognito: false,
  category: "info",
  run: async (client, message, args) => {
    var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');
    
    
    
    let embed = new MessageEmbed()
    .setTitle("Bot Information")
    .setDescription("This is Aqautic Bot Information, This will contain almost all informations")
    .addFields(
      { name: "General Info", value: [
      `name: ${client.user.username}`,
      `ID: ${client.user.id}`,
      `Tag: ${client.user.tag}`,
      `User: ${client.user}`,
      `ping: ${client.ws.ping}ms`,
      `developer: Use devcontact command for info, Aquatic`
      ]},
      { name: "NodeJS [development]", value: [
        `last connect: ${client.readyAt}`,
        `uptime [ how long bots running from previous restart ]: ${ms(client.uptime)}`,
        `Node: ${process.version} on ${process.platform} ${process.arch}`,
        `Memory: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`,
        `Developed In: JavaScript, Discord.js[DJS], Verision: v12.4`
        ]},
        { name: "Advanced", value: [
      `Guilds In: ${client.guilds.cache.size}guilds`,
      `Users Count: ${client.users.cache.size} users`,
      `Commands: ${client.commands.size} cmds`
          ]},
          { name: "Cached Data", value: [
            `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`
            ]},
      )
      .setColor("#00FFEF")
      .setThumbnail(client.user.avatarURL())
      .setAuthor(message.author.name, message.author.avatarURL())
      .setFooter(`${message.author.username}#${message.author.discriminator} asked this in ${message.guild.name}`)
      .setTimestamp(d);
    
    message.channel.send(embed)
    
  }
}
