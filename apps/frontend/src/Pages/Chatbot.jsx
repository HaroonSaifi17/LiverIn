import React, { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const botReply = getDummyReply(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 1000);

    setInput("");
  };

  const getDummyReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi"))
      return "Hello! 👋 How can I help you?";
    if (lower.includes("price") || lower.includes("cost"))
      return "Our services start from ₹2990 depending on the complexity.";
    if (lower.includes("help") || lower.includes("support"))
      return "Sure! Please describe what you need help with.";
    return "Sorry, I'm just a dummy bot. But I’m doing my best!";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full text-white flex items-center justify-center shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <BsRobot size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-xl border flex flex-col shadow-xl relative">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-blue-500 text-white font-semibold text-lg rounded-t-xl">
            <div className="flex items-center gap-2">
              <BsRobot />
              WorkAura Chatbot
            </div>
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 text-sm border rounded-md outline-none focus:ring focus:ring-blue-300"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              className="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
