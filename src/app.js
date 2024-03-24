const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const { config } = require('./config');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];
const rest = new REST({ version: '10' }).setToken(config.BOT_TOKEN);
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

async function start() {
  try {
    console.log('Started refreshing application (/) commands.');

    const res = await rest.put(
      Routes.applicationGuildCommands(
        config.CLIENT_ID,
        config.GUILDS_ID.STORYRP,
      ),
      {
        body: commands,
      },
    );

    // console.log(res);
    console.log('Successfully reloaded application (/) commands.');
  } catch (e) {
    console.log(e);
  }
}

start();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //   console.log();
});

client.on('interactionCreate', async interaction => {
  console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(config.BOT_TOKEN);
