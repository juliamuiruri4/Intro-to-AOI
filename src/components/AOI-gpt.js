import { AzureKeyCredential } from "@azure/ai-text-analytics";
import { OpenAIClient } from "@azure/openai";

const endpoint = "<ADD YOUR ENDPOINT HERE>";
const azureApiKey = "<ADD YOUR API KEY HERE>";

async function main(prompt) {
  console.log(`Prompt: ${prompt}`);
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "AOI-Demo";
  const enhancedprompt = `Given a general question from a user, provide a short and precise answer in one sentence. If the question is too vague, complex, or out of scope, respond with “I don’t know” or “Please clarify your question”. \nSome examples are:\nQ: What is the capital of Kenya? A: The capital of Kenya is Nairobi. \nQ: What is the meaning of life? A: I don’t know. \nQ: In which year was Microsoft founded? A: Microsoft was founded in 1975. \n Q:` + prompt + "\n";
  const result = await client.getCompletions(deploymentId, [enhancedprompt], { stop: ["\n"]});
  console.log(result);
  const response = result.choices[0].text;
  console.log(`Response: ${response}`);
  return response;
}

export default main;
