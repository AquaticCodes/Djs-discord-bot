const db = require("quick.db");
const { confirmation } = require("reconlx");

module.exports = {
name: "removepermissions",
authorPermission: ["ADMINISTRATOR", "MANAGE_GUILD"],
root: true,
dev: true,
category: "risky",
run: async (client, message, args) => {

message.channel.send("Do You Know What You Are Doing? \n You Are Removing Permission Checking Factor Of Bot And Thus Anyone Can Manage Guild Settings, Databases and Other Info \n \n click on ✅ for confirm and ❌ for cancel").then(async (msg) => {

const emoji = await confirmation(msg, message.author, ["✅", "❌"], 30000);
   if (emoji === "✅") {
db.set(`${message.guild.id}_root_permi`, true);
message.channel.send("Done!");
} else if (emoji === "❌") {
return;
}

});

},
};
