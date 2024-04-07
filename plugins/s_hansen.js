let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
//let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)  
}

handler.customPrefix = /^(stikerhansen|hansena)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/992beda5d20e92be4722b.png",
 "https://telegra.ph/file/d81320b98c81bab64d076.png",
 "https://telegra.ph/file/99993611ac48db3e857db.png",
 "https://telegra.ph/file/b57d30a171fd04f616513.png",
 "https://telegra.ph/file/590c4c9fb8444d4f617bb.png",
 "https://telegra.ph/file/633d8178b3fb52c09e278.png",
 "https://telegra.ph/file/84c434bdc516f353650ae.png"
]