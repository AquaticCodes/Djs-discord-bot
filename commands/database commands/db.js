const db = require("quick.db");

module.exports = {
name: "db",
aliases: ["database"],
owner: false,
admins: false,
root: true,
dev: true,
category: "root",
run: async (client, message, args) => {

if (!arga[0]) {
return message.lineReplyNoMention("Please Specifiy A Function Out Of : add | subtract | delete | set | push | all | get | fetch");
};

const todo = args[0].toLowerCase();

const key = args[1];

const functions = args.slice(2).trim();

if (todo == "add"||"subtract"||"set"||"push" && !function) {
return message.lineReplyNoMention("Please Give A Value To Do Set | Add | subtract | push");
}

if (todo == "add") {
db.add(`${message.guild.id}${key}`, functions).catch(e => { message.channel.send(e); });
message.channel.send(`${todo} for ${message.guild.id}${key} has been done successfully!!!`);
} else if (todo == "subtract") {
db.subtract(`${message.guild.id}${key}`, functions).catch(e => { message.channel.send(e); });
message.channel.send(`${todo} for ${message.guild.id}${key} has been done successfully!!!`);
} else if (todo == "set") {
db.set(`${message.guild.id}${key}`, functions).catch(e => { message.channel.send(e); });
message.channel.send(`${todo} for ${message.guild.id}${key} has been done successfully!!!`);
} else if (todo == "push") {
db.push(`${message.guild.id}${key}`, functions).catch(e => { message.channel.send(e); });
message.channel.send(`${todo} for ${message.guild.id}${key} has been done successfully!!!`);
} else if (todo == "delete") {
if (function) {
db.delete(`${message.guild.id}${key}`, functions).catch(e => { message.channel.send(e); });
} else {
db.delete(`${message.guild.id}${key}`).catch(e => { message.channel.send(e); });
}
message.channel.send(`${todo} for ${message.guild.id}${key} has been done successfully!!!`);
} else if (todo == "all") {
message.channel.send(db.all(`${message.guild.id}${key}`)).catch(e => { message.channel.send(e); });
} else if (todo == "get") {
message.channel.send(db.get(`${message.guild.id}${key}`)).catch(e => { message.channel.send(e); });
} else if (todo == "fetch") {
message.channel.send(db.fetch(`${message.guild.id}${key}`).catch(e => { message.channel.send(e); });
}
} else {
message.channel.send(`Database Functionality Error: At ${args.join(" ")}, ${args[0]} \n \n ${args[0]}(Function Error:65:31, no such function exists)`)
}

},
};
