const Command = require("./Command.js");

/**
 * Child class Unmute of Command to unmute a member
 */
const Unmute = new Command("unmute", "This unmutes a member");

Unmute.execute = (message, args, Discord) => {

    // Get the mentioned user
    const target = message.mentions.users.first();
    if (target) {

        // Get the member role
        let mainRole = message.guild.roles.cache.find(role => role.name === "member");

        // Get the mute role
        let muteRole = message.guild.roles.cache.find(role => role.name === "muted");

        // Get the user object of the target id
        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`);

    } else {
        message.channel.send("The user could not be found.");
    }

}

module.exports = Unmute;