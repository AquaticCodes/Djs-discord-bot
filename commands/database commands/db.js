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

const function = args.slice(2).trim();

if (todo == "add"||"subtract"||"set"||"push"!function) {
return message.lineReplyNoMention("Please Give A Value To Do Set | Add | subtract | push");
}

db.todo(`${message.guild.id}${key}`

},
};
