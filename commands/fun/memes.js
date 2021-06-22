const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
name: "memes",
aliases: ["meme"],
owner: false,
admins: false,
category: "fun",
run: async (client, message, args) => {

var sub_reddits = ["memes", "dankmemes", "wholesomememes", "Memes_Of_The_Dank", "FellowKids", "meme", "MinecraftMemes"];



const data = await fetch(
      `https://www.reddit.com/r/${sub_reddit}/random.json`
    ).then((res) => res.json());

    const children = data[0].data.children[0];
    const permaLink = children.data.permalink;
    const url = `https://reddit.com${permaLink}`;
    const image = children.data.url;
    const title = children.data.title;
    const upvotes = children.data.ups;
    const comments = children.data.num_comments;

    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`${title}`)
      .setURL(url)
      .setImage(image)
      .setFooter(`👍: ${upvotes} 💬 ${comments}`);

    message.channel.send({ embed }).then(msg => {
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

},
};
