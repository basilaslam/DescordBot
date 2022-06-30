const fetch = require('node-fetch');

require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });




// Get Quote



async function getQuote(){
    const URL = 'https://api.quotable.io/random'

    let data = await fetch(URL)
     data = await data.json()

     return data
             
        }







client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
      
  });





  client.on('message', async (msg) => {


    let prefix = '/';
    let message = msg.content
    if(message.startsWith(prefix)) {
        let command = message.slice(prefix.length).split(' ')[0];

        if(command == 'quote'){
            let data = await getQuote()
            let messageContent = `" ${data.content}"
-${data.author}`
            console.log(messageContent);
            let channelId = msg.channelId
            if(messageContent){
                client.channels.cache.get(channelId).send(messageContent);
            }            
        }
        
    }

});

 


client.login(process.env.TOKEN); 