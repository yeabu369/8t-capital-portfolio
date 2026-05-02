"use client";
import { Github, Mail, Twitter, Star } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/8tcapital_",
		label: "Twitter",
		handle: "@8tcapital_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@8tcap.com",
		label: "Email",
		handle: "dev@8tcap.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/8tcapital",
		label: "Github",
		handle: "8tcapital",
	},
];

export default function Example() {
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
							PROJECT : CONTACT_V1
						</div>
					</div>

					{/* Main Content */}
					<div className="flex-1 flex flex-col relative px-8 py-12 overflow-y-auto scrollbar-hide">
						<Navigation />
						<div className="container flex items-center justify-center min-h-[70vh] px-4 mx-auto">
							<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16">
								{socials.map((s) => (
									<Card key={s.label}>
										<Link
											href={s.href}
											target="_blank"
											className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
										>
											<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border border-white/20 text-zinc-200 group-hover:text-white group-hover:bg-white/5 bg-black">
												{s.icon}
											</span>{" "}
											<div className="z-10 flex flex-col items-center">
												<span className="lg:text-xl font-serif duration-150 xl:text-3xl text-zinc-200 group-hover:text-white uppercase tracking-tighter">
													{s.handle}
												</span>
												<span className="mt-4 text-[10px] text-center duration-1000 text-zinc-500 group-hover:text-zinc-200 uppercase tracking-[0.2em]">
													{s.label}
												</span>
											</div>
										</Link>
									</Card>
								))}
							</div>
						</div>
					</div>

					{/* Right Sidebar (Near content) */}
					<div className="hidden md:flex w-16 border-l border-white/20 items-center justify-center relative">
						<div className="rotate-[90deg] whitespace-nowrap text-[9px] tracking-[0.4em] uppercase opacity-40 absolute">
							SERIAL NO. 001 / CONNECT
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
