const { readFileSync } = require('fs')

let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} creator`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    let kemii = readFileSync('./plugins/' + text + '.js', 'utf-8')
    conn.sendMessage(m.chat, {
text: kemii,
contextInfo: {
externalAdReply: {
title: "Get Plugins - Kurohii-MD",
thumbnailUrl: 'https://telegra.ph/file/a4c154090b560b2c531f6.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

handler.owner = true

module.exports = handler