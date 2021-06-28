const db = require('quick.db')

module.exports = {
    name : 'captcha',
    authorPermission: ["ADMINISTRATOR"],
    owner: false,
    admins: false,
    category: "settings",
    run : async(client, message, args) => {

if (!args[0]) {
return message.lineReply("Specify On/Off");
}

        if(args[0].toLowerCase() === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send('Turned on captcha feature')
        } else if(args[0].toLowerCase() === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send('Turned off captcha feature')
        }
    }
}
