
const dotenv = require('dotenv');
const express = require('express');
const {routes} = require('./routes/router');
const {eventAdapter} = require('./connections/slack_connect');
const {openAI} = require('./connections/openai_connect');
const { handleEvents } = require('./middlewares/events');
dotenv.config()

const app = express()
const slackEvents = eventAdapter();


app.use('/slack/events',slackEvents.requestListener());
app.use('/',routes);

slackEvents.on('message',handleEvents);

app.listen(process.env.PORT, (err)=>{
    if(!err)
        console.log("Server running on port :",process.env.PORT);
    else 
        console.error("Error in initiating the server");
});

