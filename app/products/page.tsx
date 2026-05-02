import Link from "next/link";
import React from "react";
import { allProducts } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { redis } from "@/util/redis";
import { Star } from "lucide-react";

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProducts.map((p) => ["pageviews", "products", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProducts[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const sorted = allProducts
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

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
              PROJECT : PRODUCTS_V1
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col relative px-8 py-12 overflow-y-auto scrollbar-hide">
            <Navigation />
            <div className="mt-8 mb-12 border-l border-white/20 pl-6">
              <h1 className="text-5xl font-serif tracking-tight text-white sm:text-7xl uppercase">
                Products
              </h1>
              <p className="mt-4 text-zinc-400 text-xs tracking-[0.3em] uppercase">
                Solutions for the global capital markets.
              </p>
            </div>
            
            <div className="w-full h-px border-b border-white/10 mb-12" />

            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-4 pb-20">
              {sorted.map((product) => {
                const stripeUrls: Record<string, string> = {
                  "access": "https://buy.stripe.com/fZu4gsbMT8064wz0x6c3m02",
                  "agents": "https://buy.stripe.com/bJe5kw6sz4NUd35cfOc3m03",
                  "core": "https://buy.stripe.com/dRm9AM7wD94ae79bbKc3m04",
                  "max": "https://buy.stripe.com/6oU14gdV13JQaUX1Bac3m05"
                };
                const stripeUrl = stripeUrls[product.slug] || "#";

                return (
                  <Card key={product.slug}>
                    <Article product={product} views={views[product.slug] ?? 0} />
                    <div className="px-4 pb-4 md:px-8 md:pb-8 mt-auto">
                      <a 
                        href={stripeUrl} 
                        className="inline-block px-6 py-2 text-[10px] font-bold tracking-widest text-black bg-white hover:bg-zinc-200 transition-colors uppercase"
                      >
                        Buy Now
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar (Near content) */}
          <div className="hidden md:flex w-16 border-l border-white/20 items-center justify-center relative">
            <div className="rotate-[90deg] whitespace-nowrap text-[9px] tracking-[0.4em] uppercase opacity-40 absolute">
              SERIAL NO. 001 / PRODUCT LINE
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
        <div className="flex gap-8 items-center">
          <div className="hidden sm:block">OPERATIONAL CAPACITY: OPTIMAL</div>
        </div>
        <Star size={12} fill="currentColor" />
      </div>
    </div>
  );
}
