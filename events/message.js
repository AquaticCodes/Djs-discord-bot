/* ＲＡＷ ＤＥＶＥＬＯＰＭＥＮＴＡＬ ＭＯＤＵＬＥＳ */

const db = require("quick.db"); //database
const { addexp } = require("../handlers/xp.js");
const { ownerid, adminsid, bot_prefix } = require("../root/configuration.json");
let cooldown = {}
const is_url = require("../functions/islink.js");
const is_swear = require("../functions/isswear.js");
require("discord-reply");

module.exports.run = async (client, message) => {

if (message.author.bot || !message.guild || db.has(`${message.author.id}_blacklisted`)) {
return;
}

if (db.has(`${message.guild.id}.levels`)) { // if levels is enabled in settings..
if (!db.has(`levelcooldown_${message.author.id}`)) {
addexp(message)
db.set(`levelcooldown_${message.author.id}`, 1);
setTimeout(function() {
db.delete(`levelcooldown_${message.author.id}`);
}, 30000) // for every 30 seconds, add some xp to increase levels to person, 30000 = 30 seconds, you can change it in your code by downloading or hosting it!!!
}
}

if (db.has(`${message.guild.id}.automod`)) { // if auto-moderation is enabled 

if (!message.member.hasPermission("MANAGE_GUILD") || !message.member.hasPermission("ADMINISTRATOR")) {
if(is_url(message.content)) {
    return message.channel.send("You are not allowed to send links here!!!")
  } else if(is_swear(message.content)) {
    return message.channel.send("You are not allowed to use swear words in server!!!")
  }
}

}

let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = bot_prefix;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = message.guild.members.fetch(message);

const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let cmdx = db.get(`cmd_${message.guild.id}`)
  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;

/* ＣＯＭＭＡＮＤ ＲＥＳＴＲＩＣＴＩＯＮＳ */

if (command.owner && message.author.id != ownerid) {
return message.lineReplyNoMention("Only My Developer Can Run This Command!!!");
} else if (command.admins && !adminsid.includes(message.author.id)) {
return message.lineReplyNoMention("You Aren't A Staff Member To Execute This Command!!");
} else if (command.nsfw) {
if (!db.has(`${message.guild.id}.nsfw`)) {
return message.lineReplyNoMention("NSFW Settings Isn't Active, NSFW Commands Can't Be Used In This Server");
};
} else if (command.dev) {
if (!db.has(`${message.guild.id}_devmode`)) {
return message.lineReplyNoMention("Developer Settings Has To Be Enabled To Use These Commands!!!");
}
}

/* P E R M I S S I O N S */
  if (command.botPermission) {
    const Permissions = command.botPermission.filter(x => !message.guild.me.hasPermission(x)).map(x => "`" + x + "`")
    if (Permissions.length) return message.channel.send(`I need ${Permissions.join(", ")} permission(s) to execute the command!`)
  } 
  
  if (command.authorPermission) {
    const Permissions = command.authorPermission.filter(x => !message.member.hasPermission(x)).map(x => "`" + x + "`")
    if (Permissions.length) return message.channel.send(`You need ${Permissions.join(", ")} permission(s) to execute this command!`)
  }

/* C O O L - D O W N */
  let uCooldown = cooldown[message.author.id];
  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0
  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) 
  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  if (command) command.run(client, message, args);

};
