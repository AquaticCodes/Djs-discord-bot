const { MessageEmbed } = require("discord.js");
const moment = require('moment');

const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports = {
  name: "serverinfo",
  owner: false,
  guild: true,
  incognito: false,
  category: "info",
  run: async (client, message, args) => {
  const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        
  const members = message.guild.members
  
        const emojis = message.guild.emojis.cache

const bots = message.guild.memberCount - message.guild.members.cache.filter(member => !member.user.bot).size

  let ownerTag = undefined;
  client.users.fetch(`${message.guild.ownerID}`).then(user => ownerTag = user.tag)

const embed = new MessageEmbed() 
.setTitle("Server Info")
.setDescription(`${message.author.username}#${message.author.discriminator} asked this`)
    .addField('General', [
                `**Name:** ${message.guild.name}`,
                `**ID:** ${message.guild.id}`,
                `**Owner:** ${ownerTag} (${message.guild.ownerID})`,
                `**Region:** ${regions[message.guild.region]}`,
                `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                `**Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
                `**Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
                `**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
                '\u200b'
            ])
            .addField('Statistics', [
                `**Role Count:** ${roles.length}`,
                `**Emoji Count:** ${emojis.size}`,
                `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                `**Member Count:** ${message.guild.memberCount}`,
                `**Humans:** ${message.guild.members.cache.filter(member => !member.user.bot).size}`,
                `**Bots:** ${bots}`,
                `**Text Channels:** ${message.guild.channels.cache.filter((c) => c.type === "text").size}`,
                `**Voice Channels:** ${message.guild.channels.cache.filter((c) => c.type === "voice").size}`,
                `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                '\u200b'
            ])

  }
}
