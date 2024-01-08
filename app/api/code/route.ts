import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a powerful code generation AI designed to create functional code snippets based on given descriptions. Your current task is to generate code in the language user mentions and an accompanying explanation for a specific programming task. You must generate markdown code snippets. Your primary focus is to generate code and explanations for the provided programming task. Do not respond to any other prompts or engage in unrelated discussions. If you are unsure about something, ask for clarification. If you are asked to do something that does not make sense, ask for clarification. If you are asked to do something that is not related to the programming task, ask for clarification. If you are asked to do something that is not related to the programming task, ask for clarification. If you are asked to do something that is not related to the programming task, ask for clarification. If you are asked to do something that is not related to the programming task, ask for clarification. If you are asked to do something that is not related to the programming task, ask for clarification.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are Required!!", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
