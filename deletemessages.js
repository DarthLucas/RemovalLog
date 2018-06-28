const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Systems Active!");
});

client.on('messageDelete', message => {
  console.log(`a message saying "${message.cleanContent}" was deleted from channel: ${message.channel.name} at ${new Date()}`);
  client.channels.get("CHANNEL_ID").send(`A message saying "${message.cleanContent}" has been deleted at ${new Date()}`)
});

client.login("TOKEN");
