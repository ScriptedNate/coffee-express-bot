const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**List of commands & additional Information!**")
    .setColor("#82e509")
    .setThumbnail(bicon)
    .setFooter(`Commands • Prefix: "."`)
    .addField("**:help**", "List of commands and additional info")
    .addField("**:serverinfo**", "Information on the server")
    .addField("**:suggestion**","Puts a sugggestion that you made. ")
    .addField("**clear**", "Clears a 1-100 word")
    .addField("**:kick**", "Kicks someone")
    .addField("**:ban**", "Bans someone.")
    .addField("**:poll**", "Starts a poll.")
    .addField("**:tempmute**", "Mutes someone temporarily.")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"help"
}
