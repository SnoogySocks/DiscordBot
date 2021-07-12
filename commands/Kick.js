const Command = require("./Command.js");

/**
 * Child class Kick of Command
 */
const Kick = new Command("kick", "This command kicks a member!");

Kick.execute = (message, args, Discord) => {

    const target = message.mentions.users.first();
    
    if (!target) {
        message.channel.send(`User <@${target.id}> was not found`);
    } else if (!message.member.permissions.has("KICK_MEMBERS")) {
        message.channel.send("You do not have the right permissions to use that command");
    } else {

        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();
        message.channel.send(`User <@${target.id}> has been kicked`);
        
    }
    
}

module.exports = Kick;