const Command = require("./Command.js");

/**
 * Child class Ping of Command
 */
const Ping = new Command("ping", "This is a ping command!");

Ping.execute = (message, args, Discord) => {
    message.channel.send("pong!");
}

module.exports = Ping;