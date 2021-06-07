module.exports = {
name: "test",
aliases: ["online"],
owner: true,
admin: false,
run: async (client, message, args) => {
message.lineReplyNoMention("Im Online 😁");
},
};
