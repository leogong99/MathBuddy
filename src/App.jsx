import { useState } from 'react';
import { ChatContainer } from './components/ChatContainer';
import { Header } from './components/Header';
import { INITIAL_MESSAGE } from './utils/messageUtils';

export default function App() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 p-4">
      <div className="max-w-3xl mx-auto">
        <Header />
        <ChatContainer 
          messages={messages}
          setMessages={setMessages}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}