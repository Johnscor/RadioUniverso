import React from "react";
import { X } from "lucide-react";
import { IMAGES } from "../constants/images";

interface InstallModalProps {
  onClose: () => void;
  onInstall: () => void;
}

export default function InstallModal({
  onClose,
  onInstall,
}: InstallModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1A0B2E] border border-white/10 rounded-3xl p-8 w-full max-w-md relative shadow-2xl text-center animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <img
          src={IMAGES.appIcon}
          alt="App Icon"
          className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-lg"
        />

        <h3 className="text-2xl font-bold mb-3">Instalar Rádio Universo</h3>

        <p className="text-sm text-white/70 mb-8 leading-relaxed">
          Instale a Rádio Universo em seu dispositivo para acessar rapidamente
          e curtir a melhor música sem abrir o navegador.
        </p>

        <button
          onClick={onInstall}
          className="w-full bg-gradient-to-r from-[#E81C62] to-[#9C1041] text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
        >
          Instalar Aplicativo
        </button>
      </div>
    </div>
  );
}
