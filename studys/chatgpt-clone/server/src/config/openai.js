import OpenAI from "openai";


module.exports = class openai {
    static configuration(){
        const configuration = new this.configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
return new OpenAIApi(configuration)
    }
    static textCompletion ({prompt}){
        return{
  model: "gpt-3.5-turbo-instruct",
  prompt: `${prompt}`,
  temperature: 1,
  max_tokens: 3500,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
}
    }
}

