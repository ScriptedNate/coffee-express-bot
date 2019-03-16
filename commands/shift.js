
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed(
    .setColor("#82e509")
    .setThumbnail(bicon)
    .setFooter(`Commands • Prefix: ":"`)
    .addField("**Shift:**", "Hello, @everyone There is a shift being hosted down at the cafe! Why not head on down to our cafe for a lovely Caramel Milkshake? Sounds great to me!");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"shift"
}
