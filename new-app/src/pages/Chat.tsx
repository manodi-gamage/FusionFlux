import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import axios from 'axios';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            const scrollArea = scrollAreaRef.current;
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    };

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {
            role: 'user' as const,
            content: input.trim(),
            timestamp: new Date(),
        };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const payload = {
                model: 'gpt-4o-mini',
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
                    ...newMessages,
                ],
                response_format: { type: 'text' },
                temperature: 1,
                max_completion_tokens: 2048,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            };

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            };

            const { data } = await axios.post('https://api.openai.com/v1/chat/completions', payload, { headers });
            const assistantMessage = {
                role: 'assistant' as const,
                content: data.choices[0].message.content,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container max-w-4xl py-8">
            <Card className="w-full h-[850px] p-6 flex flex-col bg-gradient-to-b from-background to-muted/20">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Sri Lanka Travel Assistant
                    </h2>
                    <p className="text-center text-muted-foreground mt-2">
                        Your personal guide to exploring the Pearl of the Indian Ocean
                    </p>
                </div>
                <ScrollArea className="flex-1 pr-4 pb-4" ref={scrollAreaRef}>
                    <div className="space-y-6">
                        {messages.map((message, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-3 transition-opacity duration-200 ${
                                    message.role === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                            >
                                {message.role === 'assistant' && (
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Bot className="w-6 h-6 text-primary" />
                                    </div>
                                )}
                                <div className="flex flex-col gap-1 max-w-[80%]">
                                    <div
                                        className={`rounded-2xl px-4 py-2 shadow-sm transition-all duration-200 hover:shadow-md ${
                                            message.role === 'user' ? 'bg-blue-500 text-white text-lg ' : 'bg-muted'
                                        }`}
                                    >
                                        <ReactMarkdown
                                            className={`prose prose-sm dark:prose-invert max-w-none break-words  ${
                                                message.role === 'user' ? 'text-white' : 'text-black'
                                            }`}
                                        >
                                            {message.content}
                                        </ReactMarkdown>
                                    </div>
                                    <span
                                        className={`text-xs text-muted-foreground ${
                                            message.role === 'user' ? 'text-right' : 'text-left'
                                        }`}
                                    >
                                        {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                                    </span>
                                </div>
                                {message.role === 'user' && (
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span className="text-sm">AI is thinking...</span>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <form onSubmit={sendMessage} className="mt-4 flex gap-3">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about places to visit, local cuisine, or travel tips..."
                        disabled={isLoading}
                        className="flex-1 transition-all duration-200 focus-visible:ring-2 h-12"
                    />
                    <Button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="px-6 transition-all duration-200 hover:scale-105 h-12"
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    </Button>
                </form>
            </Card>
        </div>
    );
}
