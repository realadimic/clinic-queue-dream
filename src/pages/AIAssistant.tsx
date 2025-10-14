import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User } from "lucide-react";

interface Message {
  content: string;
  sender: "user" | "ai";
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm your AI Health Assistant. How can I help you today? I can assist with general health questions, wellness tips, and guide you to book consultations.",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses = [
    "That's a great question! For personalized medical advice, I recommend booking a consultation with one of our doctors. Would you like me to help you schedule an appointment?",
    "I'm here to assist you with your health-related questions. Please provide more details about your concern, and I'll do my best to help.",
    "Based on your query, I suggest consulting with a healthcare professional for accurate diagnosis and treatment. Would you like to book a consultation?",
    "Maintaining good health involves regular exercise, balanced nutrition, adequate sleep, and stress management. Is there a specific area you'd like to focus on?",
    "That's important to address. While I can provide general guidance, for specific medical concerns, our doctors can give you personalized advice. Shall we schedule an appointment?",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      content: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        content: randomResponse,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 h-full">
          <div className="mx-auto max-w-4xl h-full flex flex-col">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse">
                <Bot className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                AI Health <span className="gradient-text">Assistant</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Your personal guide to natural health and wellness
              </p>
            </div>

            <Card className="glass-card flex-1 flex flex-col overflow-hidden">
              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      message.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        message.sender === "ai"
                          ? "bg-gradient-to-br from-green-500 to-emerald-500"
                          : "bg-gradient-to-br from-primary to-secondary"
                      }`}
                    >
                      {message.sender === "ai" ? (
                        <Bot className="h-5 w-5 text-white" />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === "ai"
                          ? "bg-muted"
                          : "bg-gradient-to-r from-primary to-secondary text-white"
                      }`}
                    >
                      <p className="text-sm md:text-base leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0.2s]" />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t bg-background/50 p-4">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your health-related question..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white shrink-0"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  This AI assistant provides general health information. For medical advice, please consult a healthcare professional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIAssistant;
