let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/sayang.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [3,7,29,61,14,15,14,16,10] }, { quoted: m })
 }
handler.customPrefix = /^(yang|sayang|beb|ayang|ay|ayg|yayang|syg)$/i
handler.command = new RegExp

module.exports = handler