import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { getMathResponse } from '../services/api';
import { createUserMessage, createAssistantMessage } from '../utils/messageUtils';

export function ChatContainer({ messages, setMessages, isLoading, setIsLoading }) {
  const handleSendMessage = async (message) => {
    const newMessages = [...messages, createUserMessage(message)];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await getMathResponse(newMessages);
      setMessages([...newMessages, createAssistantMessage(response)]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        createAssistantMessage("Oops! Something went wrong. Let's try again! 🎯")
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-4 min-h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.content}
            isBot={message.role === 'assistant'}
          />
        ))}
        {isLoading && (
          <div className="text-center text-gray-500">
            Math Buddy is thinking... 🤔
          </div>
        )}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}