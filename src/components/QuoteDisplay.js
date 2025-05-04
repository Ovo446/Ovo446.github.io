import React, { useEffect, useState } from 'react';
import quotes from '../data/quotes.json';

function QuoteDisplay() {
  const [quote, setQuote] = useState(null);
  const [marked, setMarked] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('classicSparkLastDate');
    if (stored === today) setMarked(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  const handleSpeak = () => {
    if (quote) {
      const utter = new SpeechSynthesisUtterance(quote.text);
      speechSynthesis.speak(utter);
    }
  };

  const handleMark = () => {
    localStorage.setItem('classicSparkLastDate', new Date().toDateString());
    setMarked(true);
  };

  return quote ? (
    <div className="quote-box">
      <h2>{quote.text}</h2>
      <p><em>{quote.source}</em></p>
      <p>{quote.translation}</p>
      <button onClick={handleSpeak}>🔊 听朗读</button>
      <br />
      {!marked ? (
        <button onClick={handleMark}>🍊 今日打卡</button>
      ) : (
        <p>🍊 已打卡！明天再来！</p>
      )}
    </div>
  ) : (
    <p>加载中...</p>
  );
}

export default QuoteDisplay;
