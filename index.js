const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

//prefix

const prefix = "$";

//ready and intents

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Shake n Bake!");

    client.user.setActivity (`If you ain't first you're last!`, { type: "WATCHING" });
})


client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split("");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //commands

//test command

if (command === 'ricky') {
    message.channel.send("if you ain't first you're last")
}


})




























client.login("MTAyNzgzODkwMTI5MDgxMTQ0Mg.GlBF5I.6GuqPrcoGN6Ab23sCyOYhHRvJpQp1yS_YYKGro");
