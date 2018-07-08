const Discord = require('discord.js');
const Client = new Discord.Client();

console.log("Bot Is Connected.");

Client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
- Hey Listen Buddy,This Server Will Give You Free Money For Only Inviting People To The Server.:grin:
- You Will Receive Your Money With PayPal.
- Instant PayOuts.
- Join The Server And Start Earning.
        -------> https://discord.gg/qU4Hj2B <-------
**`)
}).catch(console.error)
})
Client.login(process.env.BOT_TOKEN);
