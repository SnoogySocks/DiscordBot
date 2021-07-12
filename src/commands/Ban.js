const Command = require("./Command.js");

/**
 * Child class Ban of Command
 */
const Ban = new Command("ban", "This command bans a member!");

Ban.execute = (message, args, Discord) => {
    message.channel.send("pong!");
}

module.exports = Ban;