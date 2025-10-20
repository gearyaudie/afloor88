export const revalidate = 60;

import { client } from "../../../../sanity.client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SharedNavbar } from "@/app/components/shared-navbar";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

const postQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    desc,
    content,
    slug,
    price,
    image {
      asset->{
        url
      }
    }
  }
`;

export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "product"]{ slug }`);
  return slugs.map((product: any) => ({ slug: product.slug?.current }));
}

// Optional: customize how blocks and lists render
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-4 text-black">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },
};

export default async function ProductsDetailsPage({ params }: Params) {
  const post = await client.fetch(postQuery, { slug: params.slug });
  console.log(post);
  if (!post) return notFound();

  return (
    <div className="bg-white">
      <SharedNavbar />
      <div className="bg-white text-black px-10">
        <div className="max-w-[1200px] mx-auto mt-12 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col gap-20 flex-wrap justify-center md:lg:flex-row">
            <div className="flex-1">
              <img
                src={post.image?.asset?.url}
                alt={post.name}
                className="w-[500px] rounded-lg mt-10 mb-4"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-[36px] font-semibold mb-6 text-black pr-12 leading-snug">
                {post.name}
              </h1>
              <div className="mb-8 text-[24px]">Harga: Rp. {post.price}</div>
              <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-black">
                <PortableText value={post.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await client.fetch(postQuery, { slug: params.slug });

  if (!post) return {};

  return {
    title: post.name,
    description: post.desc,
    keywords: post.keywords?.map((k: string) => k.toLowerCase()) ?? [],
    openGraph: {
      title: post.name,
      description: post.desc,
      url: `https://www.efloor.id/products/${params.slug}`, // 🔁 update domain
      images: [
        {
          url: post.image?.asset?.url || "/images/default-og.png",
          width: 1200,
          height: 630,
          alt: post.name,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: `https://www.efloor.id/products/${params.slug}`,
    },
  };
}
