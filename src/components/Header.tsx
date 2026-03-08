import React from "react";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { IMAGES } from "../constants/images";
import { TikTok } from "./icons/TikTok";

interface HeaderProps {
  onShareClick: () => void;
}

export default function Header({ onShareClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-6">
        <img
          src={IMAGES.logo}
          alt="Rádio Universo"
          className="h-10 object-contain"
        />

        <div className="hidden md:flex items-center gap-4 text-white/70">
          <a
            href="https://www.facebook.com/johngamershow/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E81C62] transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/alternativa_cba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E81C62] transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@johngamershow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E81C62] transition-colors"
          >
            <TikTok size={20} />
          </a>
        </div>
      </div>

      <button
        onClick={onShareClick}
        className="flex items-center gap-2 text-sm font-medium hover:text-[#E81C62] transition-colors"
      >
        <Share2 size={18} />
        <span className="hidden sm:inline">Compartilhar</span>
      </button>
    </header>
  );
}
