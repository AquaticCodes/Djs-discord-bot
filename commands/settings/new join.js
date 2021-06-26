const db = require("quick.db");
const { confirmation } = require("reconlx");

module.exports = {
name: "welcomer",
aliases: ["auto-welcome"],
owner: false,
admins: false,
category: "settings",
authorPermission: ["ADMINISTRATOR"],
run: async (client, message, args) => {

/* 

This command Analyzes The Database And Auto-Toggles The Setting!!

Making Auto-Toggler And Other Functions To Be Done Below

*/

if (!db.has(`${message.guild.id}.welcomer`)) {

const channel = message.mentions.channels.first() || message.channel;

message.channel.send(`Are You Sure To Set <#${channel.id}> As The Welcome Message Channel? \n \n ✅ To Confirm`).then(async (msg) => {
 
   const emoji = await confirmation(msg, message.author, ["✅", "❌"], 30000);
   
 if (emoji === "✅") { // If author Confirms The Channel

let choosing_embed = new MessageEmbed()
.setTitle("Type A Message By The Content Below")
.setDescription(`Type Your Welcome Message, Use These Default Syntax Specifiers \n \n ${user.username} = username in the welcome \n ${user.tag} = @tag user \n ${user.syntaxTag} = Username#0000 \n ${server} = server name`)
.setColor("RANDOM")
.addField("Example", "Hey ${user.username}, Welcome To Our Server ${server}, Hope You Have Fun");

message.channel.send(choosing_embed).then(() => {

message.channel.awaitMessages(filter, {
max: 1
}).then(collected => {

const welcome = collected.first().content;

const first = welcome.replace("${user.username}", `${message.author.username}`);

const second = first.replace("${user.tag}", `<@${message.author.id}>`);

const third = second.replace("${user.syntaxTag}", `${message.author.tag}`);

const check = third.replace("${server}", `${message.guild.name}`);

db.set(`${message.guild.id}.welcomer`, welcome);
db.set(`${message.guild.id}.welcomer_channel`, channel.id);
message.channel.send("Here Is A Show Of What You Choosed: \n \n" + check);

}).catch(e => { 

if (db.has(`${message.guild.id}_errorspush`)) {
message.author.send("Here Is The Error:" + " " + e).catch(e => { return console.error(e); });
message.channel.send("Unexpected Error Occurred, Check Your DM, If You Didn't Recive DM, Enable DM!!!");
console.error(e);
} else {
message.channel.send("Unexpected Error Occurred!!");
console.error(e);
}

});

});

    } else if (emoji === "❌") {
        return message.lineReply("Cancelled, Run Command Again!");
    };

});

} else {

// To Turn Off Welcomer..

}

},
};
