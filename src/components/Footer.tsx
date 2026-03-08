import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import { IMAGES } from "../constants/images";
import { TikTok } from "./icons/TikTok";
import { WhatsApp } from "./icons/WhatsApp";

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-[#E81C62] font-semibold mb-4 border-b border-[#E81C62] inline-block pb-1 hover:border-white transition-colors duration-300 cursor-default">
            Rádio Universo
          </h4>
          <p className="text-sm text-white/70 leading-relaxed">
            Transmissão ao vivo 24 horas por dia, 7 dias por semana. A melhor
            programação musical.
          </p>
        </div>

        <div>
          <h4 className="text-[#E81C62] font-semibold mb-4 border-b border-[#E81C62] inline-block pb-1 hover:border-white transition-colors duration-300 cursor-default">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#E81C62]" />
              <a
                href="mailto:contato@radiouniversal.com"
                className="hover:text-white transition-colors"
              >
                contato@radiouniversal.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#E81C62]" />
              <a
                href="tel:+5577981082004"
                className="hover:text-white transition-colors"
              >
                +55 77 98108-2004
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#E81C62] shrink-0 mt-0.5" />
              <a
                href="https://maps.google.com/?q=Rua+Principal,+123,+São+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Endereço: Rua Principal, 123
                <br />
                São Paulo, SP
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#E81C62] font-semibold mb-4 border-b border-[#E81C62] inline-block pb-1 hover:border-white transition-colors duration-300 cursor-default">
            Pedir música!
          </h4>
          <a 
            href="https://wa.me/5577981082004" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-xl p-3 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer block"
            style={{ display: 'flex' }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
              <WhatsApp size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#E81C62]">
                Pedir música!
              </div>
              <div className="text-xs text-white/70">
                Clique aqui.
              </div>
            </div>
          </a>
        </div>

        <div>
          <h4 className="text-[#E81C62] font-semibold mb-4 border-b border-[#E81C62] inline-block pb-1 hover:border-white transition-colors duration-300 cursor-default">
            Siga-nos
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/johngamershow/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-[#E81C62] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/alternativa_cba/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-[#E81C62] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@johngamershow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-[#E81C62] transition-colors"
            >
              <TikTok size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/50 pt-4 border-t border-white/5">
        &copy; {new Date().getFullYear()} Rádio Universo. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
