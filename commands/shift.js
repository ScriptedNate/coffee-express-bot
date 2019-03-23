
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#82e509")
    .setThumbnail(bicon)
    .setFooter(`Bot made by astrovibes#8096/Pyrotenics`)
    .addField("**Shift!**", "Hey, Staff we need you at the cafe! Link: :link: https://web.roblox.com/games/2945532137/NEW-Coffee-Cafe-V1");

    message.channel.send(botembed);
    message.delete().catch(console.error);
};

module.exports.help = {
  name:"shift"
}
