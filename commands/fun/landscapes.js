const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
    name: "landscapes",
    aliases: ["picscapes"],
    category: "Fun",
    usage: "amazeme",
    guild: false,
    private: false,
    incognito: false,
    owner: false,
    description: "Returns random amazing fact/image.",
    run: async (client, message, args) => {
// AGAIN, MAKE SURE TO INSTALL 'GOT' PACKAGE!

  got('https://www.reddit.com/r/EarthPorn/random.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var amazeme = content[0].data.children[0].data.url;
        let wow = new discord.MessageEmbed()
        .setDescription(`**` + title + `**`)
        .setImage(amazeme)
        .setFooter(`Credits to r/EarthPorn`)
        .setColor("RANDOM")
        message.channel.send(wow).then(msg => {
          if (db.has(`${message.guild.id}_reactionjs`)) {
          msg.react("👍")
          msg.react("👎")
          msg.react("😂")
          msg.react("😑")
          msg.react("😅")
          msg.react('847318650670546965')
          msg.react('847318582056714301')
          }
        }).catch(error => {
                        if (db.has(`${message.guild.id}.devmode`) || db.has(`${message.author.id}.devmode`)) {
                
                message.channel.send("error occurred, check your DM")
                message.author.send("As You Have Developer Mode Enabled, Here Is Error: \n \n" + error)
                console.log(error)
              } else {
              message.channel.send("Error Occurred While Sending and reacting to messages")
              console.log(error)
              }

          })
    }).catch(error => {
      
          if (db.has(`${message.guild.id}.devmode`) || db.has(`${message.author.id}.devmode`)) {
                
                message.channel.send("error occurred, check your DM")
                message.author.send("As You Have Developer Mode Enabled, Here Is Error: \n \n" + error)
                console.log(error)
              } else {
              message.channel.send("Error Occurred While Sending and reacting to messages")
              console.log(error)
              }
      
    });

    }
};
