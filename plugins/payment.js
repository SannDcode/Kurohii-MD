let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/68089bfa898389ef6c255.jpg'
let dann =
`
𝙿𝚊𝚢𝚖𝚎𝚗𝚝

➪ᴅᴀɴᴀ : 081477006233
➪ᴏᴠᴏ : 081325189642
➪ɢᴏᴘᴀʏ : 081999587092

ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ss ʙᴜᴋᴛɪ ᴛғ
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler