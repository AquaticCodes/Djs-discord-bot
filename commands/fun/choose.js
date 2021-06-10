const random = require("../../functions/random.js");

module.exports = {
name: "choose",
owner: false,
admins: false,
incognito: false,
category: "fun",
run: async (client, message, args) => {

const tochoosefrom = args.join(" ");

if (!tochoosefrom) {
return message.lineReply("Please Give 2 Options To Choose From, Example: choose Say Hi || Say Hello");
};

message.channel.send("Hmm, I Choose \n" + random.choose(tochoosefrom));

},
};
