import { motion } from 'framer-motion';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid';

export function ChatMessage({ message, isBot }) {
  const { speak, isSupported } = useSpeechSynthesis();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`rounded-2xl p-4 max-w-[80%] ${
          isBot
            ? 'bg-blue-100 text-blue-800'
            : 'bg-purple-100 text-purple-800'
        }`}
      >
        {isBot && (
          <div className="flex items-center gap-2 font-bold mb-1 text-blue-600">
            <span>Math Buddy 🤖</span>
            {isSupported && (
              <button
                onClick={() => speak(message)}
                className="p-1 hover:bg-blue-200 rounded-full transition-colors"
                title="Listen to response"
              >
                <SpeakerWaveIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
        <p className="text-lg">{message}</p>
      </div>
    </motion.div>
  );
}