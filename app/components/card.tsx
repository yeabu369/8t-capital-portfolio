"use client";
import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div
			className="overflow-hidden relative duration-700 border border-white/20 hover:bg-white/5 group hover:border-white/40 transition-all flex flex-col h-full"
		>
			{children}
		</div>
	);
};
