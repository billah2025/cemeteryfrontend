"use client";

import React, { useEffect, useState } from "react";
import { Heart, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  const [message, setMessage] = useState("Thank you for reaching out!");

  // Check URL params to display context-based messages
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    switch (type) {
      case "donation":
        setMessage("JazakAllahu Khairan! Your donation means a lot to our cemetery.");
        break;
      case "contact":
        setMessage("Thank you for contacting us! We’ll get back to you soon in shaa Allah.");
        break;
      case "volunteer":
        setMessage("Your volunteering spirit is appreciated! May Allah reward you abundantly.");
        break;
      default:
        setMessage("Thank you for your submission!");
        break;
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      {/* Subtle Islamic pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/islamic.png')",
        }}
      ></div>

      <div className="relative z-10 max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-10 border-t-4 border-emerald-600">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-emerald-700 animate-pulse" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
          JazakAllahu Khairan!
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{message}</p>

        <p className="text-emerald-800 italic text-sm mb-6">
          “The believer’s shade on the Day of Resurrection will be his charity.” — Prophet Muhammad ﷺ
        </p>

        <div className="flex justify-center mt-6">
          <Link
            href="/"
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-6 rounded-full transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-10 right-10 opacity-30">
        <Sparkles className="w-20 h-20 text-emerald-500" />
      </div>
    </div>
  );
}
