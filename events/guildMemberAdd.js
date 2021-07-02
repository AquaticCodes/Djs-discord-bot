const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, member) => {
  const welcome = db.get(`${member.guild.id}_welcome.channel`);
  
if (!welcome) {
return;
}

try {

const first = welcome.replace("${user.username}", `${member.user.username}`);

const second = first.replace("${user.tag}", `<@${member.user.id}>`);

const third = second.replace("${user.syntaxTag}", `${member.user.tag}`);

const message = third.replace("${server}", `${member.guild.name}`);


  let embed = new MessageEmbed()
.setTitle(`Welcome ${member.user.tag}`)
.setColor("RANDOM")
.setDescription(message)
.setFooter(`You're ${member.guild.memberCount + 1} Member Of The Guild`)
.setTimestamp();

if(db.has(`captcha-${member.guild.id}`)=== false) return;
    const url = 'https://api.no-api-key.com/api/v2/captcha';
        try {
            fetch(url)
                .then(res => res.json())
                .then(async json => {
                    console.log(json)
                    const msg = await member.send(
                        new MessageEmbed()
                            .setTitle('Please enter the captcha')
                            .setImage(json.captcha)
                            .setColor("RANDOM")
                    )
                    try {
                        const filter = (m) => {
                            if(m.author.bot) return;
                            if(m.author.id === member.id && m.content === json.captcha_text) return true;
                            else {
                                msg.channel.send("You have answered the captcha incorrectly!")
                            }
                        };
                        const response = await msg.channel.awaitMessages(filter, {
                            max : 1,
                            time : 10000,
                            errors : ['time']
                        })
                        if(response) {
                            msg.channel.send('Congrats, you have answered the captcha.')
                        }
                    } catch (error) {
                        msg.channel.send(`You have been kicked from **${member.guild.name}** for not answering the captcha correctly.`)
                        member.kick()
                    }
                })
        } catch (error) {
            console.log(error)
        }

try {

  const ChannelID = db.get(`${member.guild.id}_welcome.channel`); 
  if(!ChannelID) return;
  let data = await canva.welcome(member, { link: "https://i.pinimg.com/originals/f3/1c/39/f31c39d56512dc8fbf30f9d0fb3ee9d3.jpg" })
  client.channels.cache.get(ChannelID).send("Welcome to our Server " + <@member.user.id>, new discord.MessageAttachment(data, "welcome-image.png"));
  client.channels.cache.get(ChannelID).send(embed);
} catch(e) {

client.users.cache.get("765151089620156418").send("Error On Welcoming Function \n \n" + e);
console.error(e);

}

} catch(e) {

client.users.cache.get("765151089620156418").send(e).catch(e => { return; });

}
}
