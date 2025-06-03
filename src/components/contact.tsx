"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Check } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "litchristopher3@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="grid items-center justify-center gap-6 px-4 text-center md:px-6 w-full py-16">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-black text-white px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg/relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out through any of the platforms below.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <button
              onClick={handleCopyEmail}
              disabled={copied}
              className={`flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm transition ${
                copied
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed opacity-50"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {copied ? <Check size={16} /> : <Mail size={16} />}
              {copied ? "Email Copied" : "Email"}
            </button>
            <Link
              href="https://www.linkedin.com/in/christopherlit/"
              target="_blank"
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              <Linkedin size={16} /> LinkedIn
            </Link>
            <Link
              href="https://github.com/ChristopherLit"
              target="_blank"
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
            >
              <Github size={16} /> GitHub
            </Link>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
