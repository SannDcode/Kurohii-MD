let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
conn.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 35000 * 1000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: `*𝙼𝚊𝚊𝚏 𝚜𝚌 𝚒𝚗𝚒 𝚍𝚒 𝚓𝚞𝚊𝚕 𝚓𝚒𝚔𝚊 𝚖𝚊𝚞 𝚋𝚎𝚕𝚒 𝚋𝚒𝚜𝚊 𝚌𝚑𝚊𝚝 𝚘𝚠𝚗𝚎𝚛 𝚍𝚒 𝚋𝚊𝚠𝚊𝚑 𝚒𝚗𝚒.*

*𝙢𝙖𝙪 𝙗𝙚𝙡𝙞 𝙨𝙘? 𝙩𝙤𝙡𝙤𝙣𝙜 𝙘𝙝𝙖𝙩 𝙤𝙬𝙣𝙚𝙧*
@${creator.split("@")[0]}

© 𝙷𝚊𝚍𝚣𝚇-𝙴𝚖𝚍𝚎☂︎`,
          contextInfo: {
            mentionedJid: [creator],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

module.exports = handler

