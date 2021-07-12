const Timer = require("ms");
const Command = require("./Command.js");

/**
 * Child class Ping of Command
 */
const Mute = new Command("mute", "This mutes a member");

Mute.execute = (message, args, Discord) => {
    
    // Get the mentioned user
    const target = message.mentions.users.first();
    if (target) {

        let mainRole = message.guild.roles.cache.find(role => role.name === "member");
        let muteRole = message.guild.roles.cache.find(role => role.name === "muted");
        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);

        let send = `<@${memberTarget.user.id}> has been muted ${args[1] ? `for ${args[1]}!` : "!"}`;
        message.channel.send(send);

        // If the user added a timer then unmute the user after the time
        if (args[1]) {

            setTimeout(() => {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, Timer(args[1]));
            
        }


    } else {
        message.channel.send("The user could not be found.");
    }

}

module.exports = Mute;