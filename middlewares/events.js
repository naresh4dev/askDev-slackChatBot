const { openAI } = require('../connections/openai_connect');
const {eventAdapter, webClient} = require('../connections/slack_connect');
const {postMessage} = require('../slack_operations/postMessage')
const dotenv = require('dotenv');

dotenv.config()
const slackEvents = eventAdapter();

exports.handleEvents = async (event) =>{
    const {text, user, channel} = event
    try {
        const BOT_ID = await webClient().apiCall('auth.test').then(data=> data.user_id);
        if (BOT_ID != user){
            const response = await openAI(text);
            postMessage({text:response.data.choices[0].text, channel : channel});
        }
            
    } catch (err) {
        console.log("Error in handling the events", err);
        postMessage({text: "Internal Server Error occured. Try again later", channel:channel});
    }
    
}