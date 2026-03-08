import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Users,
} from "lucide-react";
import { IMAGES } from "../constants/images";

interface RadioMetadata {
  title: string;
  artist: string;
  cover: string;
}

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [metadata, setMetadata] = useState<RadioMetadata | null>(null);
  const [listeners, setListeners] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Placeholder stream URL
  const streamUrl = "https://stream.radioparadise.com/aac-320";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://api.radioparadise.com/api/now_playing?chan=0"));
        if (response.ok) {
          const data = await response.json();
          setMetadata({
            title: data.title || "Ouça Agora!",
            artist: data.artist || "Aperte o play.",
            cover: data.cover || IMAGES.albumArt,
          });
        }
      } catch (error) {
        console.error("Failed to fetch metadata:", error);
      }
    };

    // Fetch immediately
    fetchMetadata();

    // Poll every 10 seconds
    const interval = setInterval(fetchMetadata, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const socket = io();

    socket.on("listenersCount", (count: number) => {
      setListeners(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((e) => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 w-full shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E81C62] rounded-full blur-[80px] opacity-50"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={metadata?.cover || IMAGES.albumArt}
            alt="Album Art"
            className="w-20 h-20 rounded-xl object-cover shadow-lg"
          />
          <div>
            <h3 className="text-lg font-bold line-clamp-1">{metadata?.title || "Ouça Agora!"}</h3>
            <p className="text-sm text-white/70 line-clamp-1">{metadata?.artist || "Aperte o play."}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 text-xs font-medium">
          <div className="flex items-center gap-2 text-[#E81C62]">
            <span className="w-2 h-2 rounded-full bg-[#E81C62] animate-pulse"></span>
            AO VIVO
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <Users size={14} />
            <span>{listeners} {listeners === 1 ? "ouvinte" : "ouvintes"}</span>
          </div>
        </div>

        <div className="h-1 w-full bg-white/10 rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-[#E81C62] w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
        </div>

        <div className="flex items-center justify-between">
          <button className="text-white/70 hover:text-white transition-colors">
            <SkipBack size={24} />
          </button>

          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-[#E81C62] flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(232,28,98,0.4)]"
          >
            {isPlaying ? (
              <Pause size={28} className="text-white" />
            ) : (
              <Play size={28} className="text-white ml-1" />
            )}
          </button>

          <button className="text-white/70 hover:text-white transition-colors">
            <SkipForward size={24} />
          </button>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={toggleMute}
              className="text-white/70 hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E81C62]"
            />
            <span className="text-xs text-white/70 w-8">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={streamUrl} preload="none" />
    </div>
  );
}
