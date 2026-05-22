"use client";
import { useState } from "react";

function Navbar({ active }: { active: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-end gap-10 px-8 py-6 bg-white z-50 border-b border-gray-100">
      <a href="/" className={`font-medium ${active === "home" ? "text-blue-600" : "text-gray-800 hover:text-blue-600"}`}>Home</a>
      <a href="/resume" className={`font-medium ${active === "resume" ? "text-blue-600" : "text-gray-800 hover:text-blue-600"}`}>Résumé</a>
      <a href="/contact" className={`font-medium ${active === "contact" ? "text-blue-600" : "text-gray-800 hover:text-blue-600"}`}>Contact</a>
    </nav>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 flex flex-col overflow-y-scroll" style={{ scrollbarWidth: 'thin' }}>
      <Navbar active="contact" />
      <div className="flex-1 pt-24 pb-24">
        <h1 className="text-5xl font-bold mb-12">Contact Me</h1>
        <div className="flex flex-col gap-4 max-w-full">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-gray-500 outline-none" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-gray-500 outline-none" />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={8}
            className="w-full border border-gray-200 rounded-xl px-6 py-4 text-gray-500 outline-none resize-none" />
          <button onClick={handleSubmit} disabled={status === "sending"}
            className="w-full bg-gray-700 text-white font-semibold py-4 rounded-xl hover:bg-gray-900">
            {status === "sending" ? "Sender..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-600 text-center">Besked sendt! ✅</p>}
          {status === "error" && <p className="text-red-600 text-center">Noget gik galt. Prøv igen!</p>}
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-white px-8 flex justify-between items-center py-6 border-t border-gray-100 z-50">
        <p className="text-sm text-gray-500">© 2026 Anas Yusuf. All rights reserved.</p>
        <div className="flex gap-3 items-center">
          <a href="https://linkedin.com/in/anas-yusuf-dev" target="_blank" rel="noopener noreferrer"
            className="bg-black text-white rounded-md flex items-center justify-center w-8 h-8 hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/AnasYusufDev" target="_blank" rel="noopener noreferrer"
            className="bg-black text-white rounded-full flex items-center justify-center w-8 h-8 hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}