"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Developer based in Aarhus, Denmark";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white px-8 py-6">
      {/* Nav */}
      <nav className="flex justify-end gap-10">
        <a href="#" className="text-blue-600 font-medium">
          Home
        </a>
        <a
          href="/resume"
          className="text-gray-800 font-medium hover:text-blue-600"
        >
          Résumé
        </a>
        <a href="#" className="text-gray-800 font-medium hover:text-blue-600">
          Contact
        </a>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold tracking-widest uppercase">
          I'M ANAS YUSUF
        </h1>
        <p className="mt-6 text-lg tracking-wide text-gray-600">{text}</p>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2026 Anas Yusuf. All rights reserved.
        </p>
        <div className="flex gap-4 text-gray-700">
          <a href="#" className="hover:text-blue-600 text-sm font-medium">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-600 text-sm font-medium">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
