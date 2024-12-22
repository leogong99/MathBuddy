export function useSpeechSynthesis() {
  const synthesis = window.speechSynthesis;
  
  const speak = (text) => {
    if (!synthesis) {
      console.warn('Speech synthesis is not supported in this browser');
      return;
    }

    // Cancel any ongoing speech
    synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1.1; // Slightly higher pitch for friendly tone
    synthesis.speak(utterance);
  };

  return {
    isSupported: !!synthesis,
    speak
  };
}