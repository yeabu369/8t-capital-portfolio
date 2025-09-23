import Link from "next/link";
import React from "react";
import { allProducts } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

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
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Products
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-4">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 4 === 0)
              .map((product) => (
                <Card key={product.slug}>
                  <Article product={product} views={views[product.slug] ?? 0} />
                  <a href="https://buy.stripe.com/fZu4gsbMT8064wz0x6c3m02" className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700 cursor-pointer">Buy Now</a>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 4 === 1)
              .map((product) => (
                <Card key={product.slug}>
                  <Article product={product} views={views[product.slug] ?? 0} />
                  <a href="https://buy.stripe.com/bJe5kw6sz4NUd35cfOc3m03" className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700 cursor-pointer">Buy Now</a>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 4 === 2)
              .map((product) => (
                <Card key={product.slug}>
                  <Article product={product} views={views[product.slug] ?? 0} />
                  <a href="https://buy.stripe.com/dRm9AM7wD94ae79bbKc3m04" className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700 cursor-pointer">Buy Now</a>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 4 === 3)
              .map((product) => (
                <Card key={product.slug}>
                  <Article product={product} views={views[product.slug] ?? 0} />
                  <a href="https://buy.stripe.com/6oU14gdV13JQaUX1Bac3m05" className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-green-600 rounded hover:bg-green-700 cursor-pointer">Buy Now</a>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
