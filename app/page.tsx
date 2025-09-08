"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/echosh-logo.png"
          alt="echosh logo"
          width={120}
          height={120}
          className="mb-4 rounded-full shadow"
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">echosh</h1>
        <p className="text-lg text-center sm:text-left max-w-xl">
          {greeting}, welcome to{" "}
          <span className="font-semibold">echosh</span> — a personal project by
          Justin Andrew Wood (
          <span className="font-mono">avstudio1</span>).
        </p>
        <p className="text-base text-center sm:text-left max-w-xl mt-2">
          echosh is a platform for creative exploration, sharing, and
          collaboration. Dive into tools, experiments, and ideas crafted to
          inspire and connect.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/avstudio1/echosh"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="mailto:justin@avstudio1.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Justin
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-xs text-gray-500">
          © {new Date().getFullYear()} Justin Andrew Wood (avstudio1)
        </span>
      </footer>
    </div>
  );
}
