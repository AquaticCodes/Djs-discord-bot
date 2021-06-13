const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const { confirmation } = require("reconlx");

module.exports = {
name: "dev/root",
owner: false,
dev: true,
admins: false,
authorPermission: ["ADMINISTRATOR"],
run: async (client, message, args) => {

let embed = new MessageEmbed()
.setTitle("Read Before You Eat")
.setDescription(`${message.author.username}, Know What You Are Doing Before  Proceeding. \n This is a handle with care settings option!!!\n This Isn't A Recommend Setting Until You Know What You Are Doing!! \n React On ✅ To Enable And ❌ To Deactive And If Already Enabled, React On 🔪 To Disable \n-A Kind Note From Aquatic`)
.setColor("RANDOM")

message.channel.send(embed).then(async (msg) => {
const emoji = await confirmation(msg, message.author, ["✅", "❌", "🔪"], 120000);

if (emoji === "✅") {
db.set(`${message.guild.id}_root`, true);
db.set(`${message.guild.id}_root.policy`, "accepted");
db.set(`${message.guild.id}_root.termsofuse`, "acceptes");
msg.channel.send("Root Enabled, Here By You Agree To Use Root At Your Own Uses And Responsible For Your Data And Action!!!");

} else if (emoji === "❌") {
return message.lineReply("Operation Terminated");
} else if (emoji === "🔪") {
db.delete(`${message.guild.id}_root`);
return message.channel.send(
"Turned Off Root!"
);
}

});


},
};
