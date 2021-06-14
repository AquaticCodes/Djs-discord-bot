const db = require("quick.db");

module.exports = {
name: "dev/enable",
owner: false,
admins: false,
authorPermission: ["ADMINISTRATOR"],
run: async (client, message, args) => {

if (!db.has(`${message.guild.id}.devmode`)) {
return message.lineReply("You Must Ask A Request To Enable Developer Mode, To Submit A Request Use: devmode");
}

message.channel.send(
"Beware Of Your Options And Settings You Use, You May Manually Destroy The Bot Or Expose Database Or Destroy Security!!!"
);

if (!args[0]) {
if (!db.has(`${message.guild.id}_devmode`)) {
db.set(`${message.guild.id}_devmode`, true);
message.channel.send("No Off/On Mentioned, Auto-Toggled, Developer Mode Enabled :)");
} else {
db.delete(`${message.guild.id}_devmode`);
message.channel.send("No On/Off Mentioned, Auto-Toggled, Developer Mode Disabled!!");
}
}

switch(args[0].toLowerCase()) {

case "on":
case "enable":
case "true":

if (!db.has(`${message.guild.id}_devmode`)) {
db.set(`${message.guild.id}_devmode`, true);
message.lineReplyNoMention("Developer Mode Has Been Enabled, Beware Of The Things And Settings You Use!!");
} else {
return message.lineReplyNoMention("Developer Mode Is Already Enbaled 😅");
}
break;

case "off":
case "disable":
case "false":

if (db.has(`${message.guild.id}_devmode`)) {
db.delete(`${message.guild.id}_devmode`);
message.channel.send("Developer Mode Is Now Disabled");
} else {
return message.channel.send("Developer Mode Isn't Enabled And You Can't Disable Something That Isn't Enabled 😅😅😅😅");
}
break;

}


},
};
