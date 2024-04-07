let handler = async m => m.reply(`Sama sama🤗`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^thanks|tq|terima kasih|makasih$/i
handler.command = new RegExp

export default handler