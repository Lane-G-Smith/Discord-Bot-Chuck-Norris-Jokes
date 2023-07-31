// import bot token from .env file
const TOKEN = require('dotenv').config();
const SECRET_KEY = require('dotenv').config();

// import discord.js module
const {Client,GatewayIntentBits, Util} = require('discord.js');

// import openai module, key, new config
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

// configure permissions(intents)
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildEmojisAndStickers,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMessageTyping,
	]
});

// log successful login
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// respond to messages with API call if message include keyword
client.on("messageCreate", async function (message) {

    // ignore messages from bots
      if (message.author.bot) return;

// "awesome" triggers chuck norris joke API
else (message.content.toLowerCase().includes("awesome")) {
    let response = await fetch("https://api.chucknorris.io/jokes/random/");
    let data = await response.json();
    message.reply(`You think you know what awesome is? ${data.value}`)
  }
});

// bot login using token from .env file
client.login(process.env.TOKEN);
