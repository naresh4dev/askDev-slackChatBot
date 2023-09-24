const { openAI } = require("../connections/openai_connect");

exports.initiate = async (req,res)=>{
    res.send("Working");
}