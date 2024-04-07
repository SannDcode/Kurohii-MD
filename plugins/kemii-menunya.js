let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key }})
let { limit, role, level, exp, premiumDate } = db.data.users[m.sender]
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id'
let kemii = fs.readFileSync('./mp3/menu1.mp3') 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
☘︎︎ Hello, let me introduce myself as a multi-device WhatsApp bot who is willing to help and accompany you in playing. State your needs and I will try to help. Don't chat repeatedly because it can make the bot slow.

☘︎ *ɪ ɴ ғ ᴏ ʀ ᴍ ᴀ ᴛ ɪ ᴏ ɴ* ☘︎

• ɴᴀᴍᴇ : ${name}
• ʀᴜɴᴛɪᴍᴇ : ${uptime}
• ᴍᴏᴅᴇ : ${global.opts['self'] ? 'Self' : 'Publik'}︎
• ᴄʀᴇᴀᴛᴏʀ : ${global.author}
• ʙᴏᴛ ᴛʏᴘᴇ : ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
• ᴜsᴇʀ : ${Object.keys(global.db.data.users).length}
• ғᴇᴀᴛᴜʀᴇs : ${totalf}
• ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${Object.entries(db.data.stats).length}
• ᴅᴀᴛᴇ : ${week}, ${date}
• ᴛɪᴍᴇ : ${time}

☘︎︎ *ʟ ɪ s ᴛ - ᴍ ᴇ ɴ ᴜ* ☘︎

➪ .ᴍᴇɴᴜᴍᴀɪɴ
➪ .ᴍᴇɴᴜᴏᴡɴᴇʀ
➪ .ᴍᴇɴᴜɢᴀᴍᴇs
➪ .ᴍᴇɴᴜᴅᴏᴡɴʟᴏᴀᴅ
➪ .ᴍᴇɴᴜsᴛɪᴄᴋᴇʀ
➪ .ᴍᴇɴᴜᴍᴀᴋᴇʀ
➪ .ᴍᴇɴᴜᴄᴏɴғᴇʀᴛ
➪ .ᴍᴇɴᴜᴅɪғғᴜsɪᴏɴ
➪ .ᴍᴇɴᴜᴀɴɪᴍᴇ
➪ .ᴍᴇɴᴜɢʀᴏᴜᴘ
➪ .ᴍᴇɴᴜᴘᴀɴᴇʟ

 ᴛᴏ ᴅɪsᴘʟᴀʏ ᴀʟʟ ᴇxɪsᴛɪɴɢ ᴍᴇɴᴜ, ᴛʏᴘᴇ _*.allmenu*_`
conn.sendPresenceUpdate("composing", m.chat)
await conn.sendMessage(m.chat, {
text: Styles(menyu),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `𝙈𝙐𝙇𝙏𝙄 𝘿𝙀𝙑𝙄𝘾𝙀ꨄ︎`,
thumbnailUrl: ppUrl,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await conn.sendFile(m.chat, kemii, '', '', m, true)
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.customPrefix = /^(.menu|menu|help|menunya)$/i
handler.command = new RegExp
handler.register = true;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙋𝙖𝙜𝙞"
  if (time >= 4) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙋𝙖𝙜𝙞"
  }
  if (time >= 10) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙎𝙤𝙧𝙚"
  }
  if (time >= 15) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙎𝙤𝙧𝙚"
  }
  if (time >= 18) {
    res = "𝙎𝙚𝙡𝙖𝙢𝙖𝙩 𝙈𝙖𝙡𝙖𝙢"
  }
  return res
}