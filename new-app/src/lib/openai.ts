import OpenAI from 'openai';

if (!import.meta.env.VITE_OPENAI_API_KEY) {
    throw new Error('Missing VITE_OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export const chatConfig = {
    model: 'gpt-4', // changed from 'gpt-4-turbo-preview'
    temperature: 0.7,
    stream: true,
    messages: [
        {
            role: 'system',
            content: `You are a knowledgeable and friendly Sri Lankan travel assistant. You have extensive knowledge about:
            - Sri Lankan tourist destinations
            - Local customs and culture
            - Transportation options
            - Accommodation
            - Food and cuisine
            - Weather and best times to visit
            - Safety tips
            - Local experiences and activities
            
            Provide helpful, accurate, and engaging responses to help tourists plan and enjoy their visit to Sri Lanka.
            Keep responses concise but informative. If you're unsure about something, admit it and suggest alternatives.`,
        },
    ],
};
