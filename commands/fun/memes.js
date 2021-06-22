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

const data = await fetch(
      `https://www.reddit.com/r/${sub_reddit}/random/.json`
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

    message.channel.send({ embed });

},
};
