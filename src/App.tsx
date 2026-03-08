import React, { useState, useEffect } from "react";
import { IMAGES } from "./constants/images";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Player from "./components/Player";
import Footer from "./components/Footer";
import ShareModal from "./components/ShareModal";
import InstallModal from "./components/InstallModal";

export default function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [bgImage, setBgImage] = useState<string>(IMAGES.background);

  useEffect(() => {
    const tryLoadImage = (url: string) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    };

    const loadBackground = async (isPortrait: boolean) => {
      const formats = ['png', 'jpg', 'svg'];
      const baseName = isPortrait ? 'bgvertical' : 'bg';
      for (const format of formats) {
        try {
          const url = `/assets/images/${baseName}.${format}`;
          await tryLoadImage(url);
          setBgImage(url);
          return; // Stop if successful
        } catch (e) {
          // Continue to next format
        }
      }
    };

    const handleResize = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      loadBackground(isPortrait);
    };

    // Initial load
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show install modal after a delay
      setTimeout(() => setIsInstallModalOpen(true), 3000);
    });
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
    setIsInstallModalOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white font-sans flex flex-col relative overflow-hidden transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E]/70 via-[#3B1054]/60 to-[#E81C62]/30 z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Header onShareClick={() => setIsShareModalOpen(true)} />

        <main className="flex-grow flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
          <div className="flex-1 w-full">
            <Hero />
          </div>
          <div className="flex-1 w-full max-w-md">
            <Player />
          </div>
        </main>

        <Footer />
      </div>

      {isShareModalOpen && (
        <ShareModal onClose={() => setIsShareModalOpen(false)} />
      )}

      {isInstallModalOpen && (
        <InstallModal
          onClose={() => setIsInstallModalOpen(false)}
          onInstall={handleInstall}
        />
      )}
    </div>
  );
}
