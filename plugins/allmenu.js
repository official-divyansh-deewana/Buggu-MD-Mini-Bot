const { cmd, commands } = require("../arslan");
const moment = require("moment-timezone");
const { fakevCard } = require('../lib/fakevCard');

cmd({
pattern: "menu",
alias: ["commandlist", "allmenu", "help"],
desc: "Fetch and display all available bot commands",
category: "system",
filename: __filename,
}, async (conn, mek, m, { reply }) => {
try {
let totalCommands = 0;
let grouped = {};

```
    // Group commands by category
    for (const command of commands) {
        if (!command.pattern || !command.category) continue;

        totalCommands++;

        if (!grouped[command.category]) {
            grouped[command.category] = [];
        }

        grouped[command.category].push(command.pattern);
    }

    let menuText = "";

    for (const category in grouped) {
        menuText += `\n╭─❏ ${category.toUpperCase()} ❏\n`;
        menuText += grouped[category]
            .map(cmd => `┃ ◈ ${cmd}`)
            .join("\n");
        menuText += `\n╰─────────────❏\n`;
    }

    const time = moment().tz("Asia/Kolkata").format("HH:mm:ss");
    const date = moment().tz("Asia/Kolkata").format("dddd, MMMM Do YYYY");

    const caption = `
```

╭━━━━━━━━━━━━━━━━━━⬣
┃ 🐞 *BUGGU-MD*
┃
┃ 👤 User : @${m.sender.split('@')[0]}
┃ ⚡ Prefix : .
┃ 📊 Commands : ${totalCommands}
┃ ⏰ Time : ${time}
┃ 📅 Date : ${date}
┃ 🌐 Mode : ${(process.env.WORK_TYPE || "PRIVATE").toUpperCase()}
╰━━━━━━━━━━━━━━━━━━⬣

╭────〔 🤖 BUGGU-MD MENU 〕────⬣
${menuText}
╰────────────────────────⬣

╭━━━━━━━━━━━━━━━━━━⬣
┃ 🚀 Powered By BUGGU-MD
┃ 💎 Fast • Stable • Secure
┃ 🌹 Advanced WhatsApp Bot
╰━━━━━━━━━━━━━━━━━━⬣
`.trim();

```
    await conn.sendMessage(
        m.chat,
        {
            image: {
                url: "https://files.catbox.moe/oz0kzb.png"
            },
            caption,
            mentions: [m.sender],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363377933108135@newsletter",
                    newsletterName: "BUGGU-MD",
                    serverMessageId: 1,
                },
            },
        },
        { quoted: fakevCard }
    );

} catch (err) {
    console.error("AllMenu Error:", err);
    reply("❌ Error while generating menu.");
}
```

});
