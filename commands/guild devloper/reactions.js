const db = require("quick.db");

module.exports = {
name: "reactions",
onwer: false,
admins: false,
dev: true,
category: "dev",
authorPermission: ["ADMINISTRATOR"],
run: async (client, message, args) => {

consg msg = await message.channel.send("Hold On, Checking Activity And Version and changing it");

if (!db.has(`${message.guild.id}_reactionjs`)) {
await db.set(`${message.guild.id}_reactionjs`);
msg.edit("Turned On!!");
} else {
db.detele(`${message.guild.id}_reactionjs`);
msg.edit("Turned Off!!");
}

},
};
