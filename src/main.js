const Discord = require("discord.js");
const prefix = '-';
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Read in the commands and only use the ones ending in js
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js") && file !== "Command.js");
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Execute only once
client.once("ready", () => console.log("Jacky's Ass is online"));

// Command handler
client.on("message", message => {

    // Do not execute if the message does not start with the prefix
    // or is a message from the bot
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    // Remove the prefix and split at spaces or pluses
    const args = message.content.substring(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands.get(command).execute(message, args, Discord);

});

// Read file for token
let token;
fs.readFile("C:/Users/felix/OneDrive/Documents/confidential/discordBotToken.json", "utf8", (err, jsonString) => {

    if (err) {
        console.log("File read failed.", err);
        return;
    }

    token = JSON.parse(jsonString).token;
    client.login(token);

});

