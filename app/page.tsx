"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Youtube } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  const enterSite = () => {
    setHasEntered(true);
    const audio = document.getElementById("bgMusic") as HTMLAudioElement;
    if (audio) {
      audio.play().catch((err: unknown) => {
        if (err instanceof Error) {
          console.error("Audio autoplay blocked:", err.message);
        }
      });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <audio id="bgMusic" loop>
        <source src="/song.mp3" type="audio/mp3" />
      </audio>

      {!hasEntered ? (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl font-bold cursor-pointer"
          onClick={enterSite}
        >
          Click to Enter
        </div>
      ) : (
        <>
          <div
            className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${
              hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 z-10 bg-white/10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
          </div>

          <Card className="relative z-20 w-[400px] backdrop-blur-md bg-slate-800/40 border-white/20 text-white p-8">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src="/STP.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    width={0}
                    height={0}
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold  text-cyan-400">
                  STierProgrammer
                </h1>
                <p className="text-sm text-gray-300">
                  World is beautiful, isn't it, my friend?
                </p>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/5 hover:bg-white/10 border-white/10"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/5 hover:bg-white/10 border-white/10"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </>
      )}
    </main>
  );
}
