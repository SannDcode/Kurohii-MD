let handler = async (m, { text }) => {
if (!text) throw `Apa yang mau di tanyakan?`
let respon = (await require('axios').post('https://bard.rizzy.eu.org/api/onstage', {
ask: text
})).data.content;
m.reply(respon)
}

handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']
handler.owner = true

module.exports = handler