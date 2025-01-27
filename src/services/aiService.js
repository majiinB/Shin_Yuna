import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0.8,
    maxRetries: 2,
});

module.exports = { llm }