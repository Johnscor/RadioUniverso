import React from "react";
import { X, Copy, Facebook, Twitter } from "lucide-react";
import { WhatsApp } from "./icons/WhatsApp";

interface ShareModalProps {
  onClose: () => void;
}

export default function ShareModal({ onClose }: ShareModalProps) {
  const shareUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copiado para a área de transferência!");
  };

  const shareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=Ouça a Rádio Universo: ${shareUrl}`,
      "_blank",
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      "_blank",
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=Ouça a Rádio Universo!`,
      "_blank",
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1A0B2E] border border-white/10 rounded-3xl p-6 w-full max-w-md relative shadow-2xl animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-semibold text-center mb-6 text-[#E81C62]">
          Compartilhar Rádio Universo
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            onClick={copyToClipboard}
            className="glass-panel flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <Copy size={24} className="text-[#E81C62]" />
            <span className="text-xs font-medium">Copiar link</span>
          </button>

          <button
            onClick={shareWhatsApp}
            className="glass-panel flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <WhatsApp size={24} className="text-[#E81C62]" />
            <span className="text-xs font-medium">WhatsApp</span>
          </button>

          <button
            onClick={shareFacebook}
            className="glass-panel flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <Facebook size={24} className="text-[#E81C62]" />
            <span className="text-xs font-medium">Facebook</span>
          </button>

          <button
            onClick={shareTwitter}
            className="glass-panel flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <Twitter size={24} className="text-[#E81C62]" />
            <span className="text-xs font-medium">Twitter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
