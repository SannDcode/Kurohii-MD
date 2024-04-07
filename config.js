let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['6287871537199'],
  ['6285777562859'],
  ['6283876999143', 'HadzX-Emde', 'JANBCOOOT@gmail.com', true]
] // Put your number here
global.mods = ['6285777562859','6287871537199'] // Moderator
global.prems = ['6285777562859','6287871537199'] // Premium
global.rose = 'Rk-Salsabila';
global.xyro = 'NHFkaiNkLm';
global.btc = 'Rizalzllk';
global.skizo = 'devina';
global.lolkey = 'a20192461637212b952da164';
global.zein = 'zenzkey_16063643f84c',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    skizo: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'NHFkaiNkLm',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'a20192461637212b952da164',
    'https://api.itsrose.life': 'Rk-Salsabila',
    'https://skizo.tech' : 'devina',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '𝙈𝙪𝙡𝙩𝙞𝙙𝙚𝙫𝙞𝙘𝙚'
  var sticker_author = 'Kurohii-MD'
} else {
  var sticker_name = 'Kurohii-MD'
  var sticker_author = 'Kurohii-MD'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '1.5.5'
global.sessionName = 'salsa'
global.gcbot = 'https://chat.whatsapp.com/LE0dZyWbFPcA2thnDLls7C'
global.instagram = 'https://instagram.com/hadzz_official'
global.namebot = 'Kurohii-MD'
global.thumb = 'https://telegra.ph/file/955cc741fa63141ecd495.jpg'
global.thumbnail = 'https://telegra.ph/file/955cc741fa63141ecd495.jpg'
global.bgWelcome = `https://telegra.ph/file/4ff1777cb95ee73ef122f.jpg`
global.bgLeave = `https://telegra.ph/file/a26e72d645f6052de875f.jpg`
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/113eab4e604ed01b06bf3.jpg'
global.creator = "6281999587092@s.whatsapp.net"
global.nomorown = '6287871537199'

// Sosial Media
global.sig = 'https://instagram.com/hadzz_official'
global.syt = 'https://youtube.com/@HadzzOfficial'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/LE0dZyWbFPcA2thnDLls7C'
global.swa = 'https://wa.me/6283876999143'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '*083876999143*'
global.povo = '*083876999143*'
global.pgopay = '*083876999143*'
global.pulsa = '*083876999143*'
global.pulsa2 = '*6285780739971*'
global.psaweria = '*~Not Found~*'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// crate panel
global.domain = 'https://panelv14.senjaxpedia.com'
global.plta = 'ptla_ireYz0G6QdRL2o28OE1X60N5j27kHmOKev26wACeamN'
global.pltc = 'ptlc_xJi50oyTXeKjcNx5I83JNbRhnucL10eA2vnsLoeSzcV'

// Fake Size
global.fsizedoc = '1000000000000' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'WHYSANN'
global.author = '© HadzZ'
global.wm = 'HadzX-Emde☂︎'
global.wm2 = 'WHYSANN.'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = '𝗔 𝗞 𝗦 𝗘 𝗦  𝗞 𝗔 𝗠 𝗨  𝗗 𝗜 𝗧 𝗢 𝗟 𝗔 𝗞!!'
global.packname = 'WHYSANN.'
global.author = 'Kurohii-MD☂︎'
global.nameown = 'Kurohii-MD'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//