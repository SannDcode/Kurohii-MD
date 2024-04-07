let fetch = require("node-fetch");
let handler = async (m, { conn, args, text, usedPrefix: _p, command, isROwner }) => {
switch (command) {
case "bard_image": {
let mime = (q.msg || q).mimetype || ''
if (!m.quoted) return m.reply(Harus Beserta Gambarnyaaaaaaaa)
if (!text) return m.reply('Nanyain apaaa')
if (!mime) throw (Send/Reply Foto Dengan Caption ${prefix + command} pertanyaan`)
newReply('mencari informasi....')
const media = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
let res = await fetchJson(`https://api.yanzbotz.my.id/api/ai/bardimg?query={text}&url=${anu}&apiKey=${global.yanz}`) let captbard =`\n${res.result}`
m.reply(captbard)
}

handler.help = ["bard_image"];
handler.command = ["bard_image"];
handler.tags = ["ai"];
};

module.exports = handler;