require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

exports.openAI = async message=>{
    try {
        const configuration = new Configuration({
            organization : process.env.ORG_ID,
            apiKey : process.env.API_KEY,
        });
        const openAI = new OpenAIApi(configuration);
        const conversationContextPrompt = " Considering you are assistant, who is helpful, creative, clever, and very friendly. Give valid and convinent response to be question:";
        const response =  await openAI.createCompletion({
            model: "text-davinci-003",
            prompt: conversationContextPrompt + message,
            temperature: 0.9,
            max_tokens: 100,
        });
       return response;
    } catch (err) {
        console.error(`Error in connecting to OpenAI: ${err}`);
    }

}