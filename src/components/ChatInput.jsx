import { useState } from 'react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { VoiceButton } from './VoiceButton';

export function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const { isSupported, startListening } = useSpeechRecognition();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleVoiceInput = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    startListening((transcript) => {
      setMessage(transcript);
      setIsListening(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your math question here..."
          className="flex-1 rounded-full px-6 py-3 text-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none"
        />
        {isSupported && (
          <VoiceButton 
            onVoiceInput={handleVoiceInput}
            isListening={isListening}
          />
        )}
        <button
          type="submit"
          className="bg-purple-500 text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-purple-600 transition-colors"
        >
          Ask! 🚀
        </button>
      </div>
    </form>
  );
}