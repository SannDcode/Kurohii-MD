let handler = async (m, { conn, text, usedPrefix: _p }) => {
  let name = await conn.getName(m.sender)
  let flaaa2 =[
'https://telegra.ph/file/a13b02571766db3e0f51d.jpg',
'https://telegra.ph/file/e184d39ee979afc9909a5.jpg',
'https://telegra.ph/file/d97f5509e5ed9a173fafc.jpg']
  let user = global.db.data.users[m.sender]
  let message = `ada apa kak?`
conn.sendPresenceUpdate("composing", m.chat)
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 100000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: message,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.customPrefix = /^(dev)$/i
handler.command = new RegExp
handler.tags = ['main']
handler.owner = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}