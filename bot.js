require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})
const BOT_PREFIX = 'x'
const MOD_ME_COMMAND = 'mod-me'
//Avec tag
const CONTENT_MSG1 = 'test'
const CONTENT_REP1 = 'badi boum'
//Sans tag
const CONTENT_MSG2 = 'TAG'
const CONTENT_REP2 = 'UEULE'
//Réaction
const CONTENT_MSG3 = 'Donne moi un A'
//Suppr msg
const CONTENT_MSG_SUPPR = 'POURQUOI TU SUPPRIMES ????'

client.on('ready', () => {
  console.log(`Our bot is ready to go`)
})

//Répond a un msg en taggant
client.on('message', msg => {
    if (msg.content === `${CONTENT_MSG1}`) {
      msg.reply(`${CONTENT_REP1}`)
    }
})
//Répond à un msg sans tagger
client.on('message', msg => {
    if (msg.content === `${CONTENT_MSG2}`) {
      msg.channel.send(`${CONTENT_REP2}`)
    }
})
// Donne un role
client.on('message', msg => {
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})
function modUser(member) {
    member.roles.add("787746606266843196")
}
//Réagir à un msg
client.on('message', msg => {
    if (msg.content === `${CONTENT_MSG3}`) {
      msg.react("🅰")
    }
})
/* badzo
//Msg suppr
client.on('messageDelete', msg => {
    msg.channel.send(`${CONTENT_MSG_SUPPR}`)
})
*/


client.login(process.env.BOT_TOKEN)