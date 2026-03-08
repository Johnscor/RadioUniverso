import React from "react";
import { Apple, Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-start text-left">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
        Seu <span className="text-[#E81C62]">Universo</span>
        <br />
        de <span className="text-[#E81C62]">Música</span>
      </h1>
      <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg">
        A melhor experiência musical para você. Descubra novos sons na Rádio
        Universo.
      </p>

      <div className="flex flex-wrap gap-4">
        <a 
          href="https://apps.apple.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-panel flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-white/10 transition-colors"
        >
          <Apple size={28} />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-white/70">
              Baixar na
            </div>
            <div className="text-sm font-semibold leading-none">App Store</div>
          </div>
        </a>

        <a 
          href="https://play.google.com/store/apps/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-panel flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-white/10 transition-colors"
        >
          <Play size={28} />
          <div className="text-left">
            <div className="text-[10px] uppercase tracking-wider text-white/70">
              Disponível no
            </div>
            <div className="text-sm font-semibold leading-none">
              Google Play
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
