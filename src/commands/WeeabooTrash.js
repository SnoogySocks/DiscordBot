const Command = require("./Command.js");

/**
 * Child class WeeabooTrash of Command
 */
const WeeabooTrash = new Command("wt", "This is a link to a youtube playlist!");

WeeabooTrash.execute = (message, args, Discord) => {

    if (message.member.permissions.has("KICK_MEMBERS")) {

        const newEmbed = new Discord.MessageEmbed()
            .setColor("#3D4281")
            .setTitle("WeeabooTrash Playlist")
            .setURL("https://www.youtube.com/playlist?list=PLWrOHWWq4rkkOcz-114_gw3e0Ga5UVOHd")
            .setDescription("This is a embmed for the server rules")
            .addFields(
                { name: "Rule 1", value: "Be nice" },
                { name: "Rule 2", value: "Follow Twitch!" },
                { name: "Rule 3", value: "No memes" }
            )
            .setImage("https://i.pinimg.com/280x280_RS/1f/08/e9/1f08e93f7ed4b17ba24713b8087392cb.jpg")
            .setFooter("Make sure to look at the playlist");
        
        message.channel.send(newEmbed);
        
    }
    
}

module.exports = WeeabooTrash;