import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key missing' }, 
        { status: 500 }
      );
    }

    const { message = '', context = 'Ocean data inquiry' } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message required' }, 
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are FloatChat AI, an expert ocean data assistant.

Context: ${context}
User: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return NextResponse.json({ reply: response.text() });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
