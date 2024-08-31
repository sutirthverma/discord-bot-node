const { REST, Routes } = require('discord.js');
const CLIENT_ID = process.env.CLIENT_ID;
const TOKEN = process.env.BOT_TOKEN;


const commands = [
    {
        name: 'create',
        description: 'Create a short url id!',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);


(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();