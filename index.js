const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async message => {
    if (message.author.bot) return;


    if (message.content === 'Hello Bot') {
        message.reply({
            content: `Hi ${message.author.displayName}`
        })
    }
    console.log(message.content);
}) 

client.on('interactionCreate', interaction => {
    console.log(interaction);
    if(interaction.commandName === 'ping'){
        interaction.reply('Pong!');
    }  
});



client.login(process.env.BOT_TOKEN);