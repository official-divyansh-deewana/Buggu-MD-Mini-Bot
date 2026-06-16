const { cmd } = require("../arslan");
const moment = require("moment");
const { fakevCard } = require('../lib/fakevCard');

let botStartTime = Date.now();

const ALIVE_IMG = "https://files.catbox.moe/oz0kzb.png";

cmd({
pattern: "alive",
desc: "Check bot status",
category: "main",
react: "⚡",
filename: __filename
}, async (conn, mek, m, { reply, from }) => {
try {

```
    const pushname = m.pushName || "User";

    const currentTime = moment().format("HH:mm:ss");
    const currentDate = moment().format("dddd, MMMM Do YYYY");

    const runtime = Date.now() - botStartTime;

    const hours = Math.floor(runtime / (1000 * 60 * 60));
    const minutes = Math.floor((runtime / (1000 * 60)) % 60);
    const seconds = Math.floor((runtime / 1000) % 60);

    const caption = `
```

╭━━━〔 *BUGGU-MD STATUS* 〕━━━⬣
┃
┃ 👋 Hello ${pushname}
┃
┃ ⏰ Time : ${currentTime}
┃ 📅 Date : ${currentDate}
┃ ⚙️ Mode : Public
┃ 🚀 Runtime : ${hours}h ${minutes}m ${seconds}s
┃ 🤖 Bot : BUGGU-MD
┃
╰━━━━━━━━━━━━━━━━⬣

> ✅ BUGGU-MD is Online & Working Perfectly

🔥 Fast Response
⚡ Premium Features
💎 Stable Connection
`.trim();

```
    await conn.sendMessage(from, {
        image: {
            url: ALIVE_IMG
        },
        caption,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363377933108135@newsletter",
                newsletterName: "BUGGU-MD OFFICIAL",
                serverMessageId: 143
            }
        }
    }, {
        quoted: fakevCard
    });

} catch (error) {
    console.error(error);
    reply(`❌ Error: ${error.message}`);
}
```

});
