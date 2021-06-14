const db = require("quick.db");

module.exports = {
name: "dev/prefix",
owner: false,
dev: true,
authorPermission: ["ADMINISTRATOR"],
admins: false,
incognito: true,
run: async (client, message, args) => {

if (!args[0]) {

if (!db.has(`${message.guild.id}_extendprefix`)) {

db.set(`${message.guild.id}_extendprefix`, true);
message.channel.send(
"No Toggle Specified Auto-Toggled, Prefix Length Limit Has Been Extended, Now Set Prefix Length Of Your Choice"
);

} else {

db.delete(`${message.guild.id}_extendprefix`);
message.channel.send(
"No Toggle Specified Auto-Toggled, Prefix Length Limit Has Been Set To 4 Again"
);

};

};

const mode = args[0].toLowerCase();

switch(mode) {

case "on":
case "enable":
case "true":

db.set(`${message.guild.id}_extendprefix`, true);
message.channel.send("Prefix Length Has Been Extended To Unlimited");

break;

case "disable":
case "off":
case "false":

db.delete(`${message.guild.id}_extendprefix`);
message.channel.send("Prefix Length Restrictions Actived, Prefix Is In Length Of 4 Again!!!");

break;

}

},
};
