import Link from "next/link";
import React from "react";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-black text-white font-mono selection:bg-white selection:text-black">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-white/40 text-[10px] tracking-[0.2em] uppercase z-20 bg-black">
        <div className="flex items-center gap-4">
          <Star size={12} fill="currentColor" />
          <span>$8T CAPITAL FUND</span>
        </div>
        <div className="hidden md:block">
          SYSTEMS FOR CAPITAL SUPERINTELLIGENCE
        </div>
        <div className="flex items-center gap-4">
          <span>CAPITAL DIVISION</span>
          <Star size={12} fill="currentColor" />
        </div>
      </div>

      {/* Main Content Area with Grooved Sides */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Left Grooved Margin */}
        <div 
          className="hidden lg:block flex-1 border-r border-white/20"
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 7px, rgba(255,255,255,0.1) 7px, rgba(255,255,255,0.1) 8px)`,
            backgroundSize: '100% 100%'
          }}
        />

        {/* Central focused lane */}
        <div className="flex flex-row w-full max-w-[1400px] mx-auto border-x border-white/10 relative bg-black shadow-[0_0_50px_rgba(0,0,0,1)]">
          
          {/* Left Sidebar (Near content) */}
          <div className="hidden md:flex w-16 border-r border-white/20 items-center justify-center relative">
            <div className="rotate-[-90deg] whitespace-nowrap text-[9px] tracking-[0.4em] uppercase opacity-40 absolute">
              PROJECT : CAPITAL MARKETS
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center relative px-8 py-12 text-center overflow-y-auto scrollbar-hide">
            {/* Header Compartment */}
            <div className="mb-12 border border-white/20 p-16 w-full relative">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
              
              <h1 className="text-7xl md:text-[10rem] font-serif tracking-tighter leading-none animate-title">
                8T Capital
              </h1>
            </div>

            {/* Subtext Compartments */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full border border-white/20 text-left mb-12">
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/20 text-[11px] leading-relaxed opacity-70 uppercase tracking-wider">
                A fund dedicated to building critical infrastructure at the intersection of capital markets and superintelligence.
              </div>
              <div className="p-8 border-b md:border-b-0 md:border-r border-white/20 text-[11px] leading-relaxed opacity-70 uppercase tracking-wider">
                Tiered investment architecture. Multi-sector alignment. Embedded with founders at the frontier of innovation.
              </div>
              <div className="p-8 flex items-center justify-center bg-white/5">
                <Link 
                  href="/contact"
                  className="w-full py-4 border border-white hover:bg-white hover:text-black transition-colors duration-300 text-center text-xs font-bold tracking-[0.3em] uppercase"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Visual Compartment */}
            <div className="w-full border border-white/20 bg-zinc-950 flex items-center justify-center relative overflow-hidden group aspect-video">
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10" />
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              <div className="text-[120px] font-serif opacity-10 select-none pointer-events-none">8T</div>
              
              {/* Blueprint Labels */}
              <div className="absolute top-4 left-4 text-[8px] tracking-widest opacity-30 uppercase">
                REF_NO: 8TC-01 // LAYER_STRATA_V1
              </div>
              
              <div className="absolute bottom-6 right-8 border border-white/40 rounded-full w-16 h-16 flex items-center justify-center font-serif text-2xl group-hover:scale-110 transition-transform duration-700">
                R
              </div>
            </div>
          </div>

          {/* Right Sidebar (Near content) */}
          <div className="hidden md:flex w-16 border-l border-white/20 items-center justify-center relative">
            <div className="rotate-[90deg] whitespace-nowrap text-[9px] tracking-[0.4em] uppercase opacity-40 absolute">
              SERIAL NO. 001 / BUILT FOR INTELLIGENCE
            </div>
          </div>
        </div>

        {/* Right Grooved Margin */}
        <div 
          className="hidden lg:block flex-1 border-l border-white/20"
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 7px, rgba(255,255,255,0.1) 7px, rgba(255,255,255,0.1) 8px)`,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Bottom Footer Bar */}
      <div className="flex justify-between items-center px-4 py-2 border-t border-white/40 text-[10px] tracking-[0.2em] uppercase z-20 bg-black">
        <Star size={12} fill="currentColor" />
        <div className="flex gap-8">
          <Link href="/products" className="hover:text-zinc-400 transition-colors">PRODUCTS</Link>
          <div className="hidden sm:block">FROM FACTORY FLOORS TO ORBIT</div>
        </div>
        <Star size={12} fill="currentColor" />
      </div>
    </div>
  );
}

