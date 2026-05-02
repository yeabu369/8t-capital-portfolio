import type { Product } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	product: Product;
	views: number;
};

export const Article: React.FC<Props> = ({ product, views }) => {
	return (
		<Link href={`/products/${product.slug}`} className="flex-1 flex flex-col">
			<article className="p-4 md:p-8 font-mono flex-1 flex flex-col">
				<div className="flex justify-between gap-2 items-center mb-4 opacity-50 text-[10px] uppercase tracking-widest">
					<span>
						{product.date ? (
							<time dateTime={new Date(product.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(product.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="flex items-center gap-1">
						<Eye size={12} />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="text-2xl font-serif text-white mb-4">
					{product.title}
				</h2>
				<p className="text-xs text-zinc-400 leading-relaxed flex-1">
					{product.description}
				</p>
			</article>
		</Link>
	);
};
