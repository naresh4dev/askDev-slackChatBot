const {webClient} = require('../connections/slack_connect');

exports.postMessage = async data =>{
    try {
        const result = await webClient().chat.postMessage(data);
        return {status : true, result : result}
    } catch (err) {
        console.error(`Error in sending message: ${err}`);
        return {status: false}
    }
}