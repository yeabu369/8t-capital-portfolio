"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm duration-300 border-b font-mono uppercase tracking-widest text-[10px] ${
					isIntersecting
						? "bg-black/0 border-transparent"
						: "bg-black/80 border-white/20"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/products"
							className="duration-200 text-zinc-400 hover:text-white"
						>
							Products
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-white"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-white border border-white/20 p-2"
					>
						<ArrowLeft size={16} />
					</Link>
				</div>
			</div>
		</header>
	);
};
