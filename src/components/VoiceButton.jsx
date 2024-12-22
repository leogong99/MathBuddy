import { useState } from 'react';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/solid';

export function VoiceButton({ onVoiceInput, isListening }) {
  return (
    <button
      onClick={onVoiceInput}
      className={`rounded-full p-3 transition-colors ${
        isListening 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-purple-500 hover:bg-purple-600'
      }`}
      title={isListening ? 'Stop listening' : 'Start voice input'}
    >
      {isListening ? (
        <StopIcon className="h-6 w-6 text-white" />
      ) : (
        <MicrophoneIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}