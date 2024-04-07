let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/49c9d532d06119cdba705.jpg'
let dann =
`
ʜᴀɪ ᴋᴀᴋ👋 
ᴋᴀʟɪᴀɴ ʙɪsᴀ ʙᴇʀᴋᴏɴᴛʀɪʙᴜsɪ ᴅᴀʟᴀᴍ ᴘᴇɴɢᴇᴍʙᴀɴɢᴀɴ ʙᴏᴛ ɪɴɪ ᴅᴇɴɢᴀɴ ʙᴇʀᴅᴏɴᴀsɪ sᴇɪᴋʜʟᴀsɴʏᴀ

ᴅᴏɴᴀsɪ
➪ᴅᴀɴᴀ : 083876999143
➪ᴏᴠᴏ : 083876999143
➪ɢᴏᴘᴀʏ : 083876999143

ʙᴇsᴀʀ ᴋᴇᴄɪʟ ᴊᴜᴍʟᴀʜ ᴅᴏɴᴀsɪ ʏᴀɴɢ ᴋᴀʟɪᴀɴ ʙᴇʀɪᴋᴀɴ ɪᴛᴜ sᴜᴅᴀʜ sᴀɴɢᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ☘︎

ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ...
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(donasi|donate)$/i
module.exports = handler