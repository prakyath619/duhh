import React, { useState, useEffect } from "react";

const JJ_MESSAGES = [
  "Yo, what’s up? I’m Jesse Jarvis — JJ if you’re chill like that.",
  "If you know Breaking Bad, you know the vibes. If not, you’re seriously missing out.",
  "Anyway, I’m like Jarvis… but with more sarcasm and honesty.",
  "So, what are you trying to get done today? I’ll keep it real with you."
];

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setMessages((prev) => [...prev, JJ_MESSAGES[i]]);
      i++;
      if (i === JJ_MESSAGES.length) clearInterval(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      `🧍You: ${input}`,
      `🤖 JJ: ${jjReply(input)}`
    ]);
    setInput("");
  };

  const jjReply = (text) => {
    text = text.toLowerCase();
    if (text.includes("tired")) return "Then go touch some grass, recharge, and come back stronger.";
    if (text.includes("help")) return "Alright, what do you need help with? No sugarcoating, though.";
    if (text.includes("life")) return "Ah, life — the ultimate boss level. You’ll win if you keep leveling up.";
    return "Interesting take. You sure about that?";
  };

  return (
    <div className="app">
      <header className="header">LIMITLESS ⚡</header>
      <main className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className="msg">{msg}</div>
        ))}
      </main>
      <footer className="footer">
        <input
          type="text"
          placeholder="Talk to JJ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </footer>
    </div>
  );
}