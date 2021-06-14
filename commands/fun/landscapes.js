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
        .setFooter(`Credits to [r/EarthPorn](`)
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
                        if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e);
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

          })
    }).catch(error => {
      
          if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e);
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

      
    });

    }
};
