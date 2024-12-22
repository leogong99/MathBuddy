export function useSpeechRecognition() {
  const recognition = 'webkitSpeechRecognition' in window
    ? new webkitSpeechRecognition()
    : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  }

  const startListening = (onResult) => {
    if (!recognition) {
      console.warn('Speech recognition is not supported in this browser');
      return;
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    recognition.start();
  };

  return {
    isSupported: !!recognition,
    startListening
  };
}