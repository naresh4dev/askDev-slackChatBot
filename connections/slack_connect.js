const  { WebClient } = require("@slack/web-api");
const { createEventAdapter } =  require("@slack/events-api");

exports.webClient = async => {
    try {
        const askDevInstance = new WebClient(process.env.SLACK_TOKEN)
        return askDevInstance
    } catch(err) {
        console.error(`Error in connecting to Slack Web API : ${err}`)
    }
}

exports.eventAdapter = () =>{
    try {
        const eventAdapter  = createEventAdapter(process.env.EVENT_SIGNING_SECRET);
        return eventAdapter
    } catch (err) {
        console.error(`Error in connecting to Slack Event Adapter : ${err}`)
    }
}