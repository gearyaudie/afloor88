export const revalidate = 60;

import React from "react";
import { client } from "../../../sanity.client";
import { SharedNavbar } from "../components/shared-navbar";
import Link from "next/link";
import { Card } from "@mui/material";
import { PortableText } from "next-sanity";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  content: any[];
  img: any;
  excerpt: string;
};

export default async function BlogMain() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      content,
      excerpt,
      img {
        asset->{
          url
        }
      }
    }`
  );

  console.log(posts);
  return (
    <div className="bg-white text-black h-full">
      <SharedNavbar />

      <div className="bg-white text-black h-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center text-3xl font-600 mb-16 mt-10">
            Semua artikel
          </div>
          <div className="bg-white flex gap-8 h-full">
            {posts.map((post) => (
              <Card key={post._id} className="relative w-[500px] shadow-lg">
                {post.img && (
                  <img
                    src={post.img?.asset?.url}
                    alt={post.title}
                    style={{ width: 350, height: "200px" }}
                  />
                )}
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="absolute top-[0] right-[10px] bg-[#FFB6C1] px-6 py-1 w-fit mt-6 ml-6 rounded-xl text-black text-sm font-[600] shadow-md">
                    Guide
                  </div>
                  <div className="text-lg font-[600] pt-3 pb-2 px-6">
                    {post.title}
                  </div>
                  <div className="px-6 text-sm text-[#808080] pb-6 font-[400]">
                    {post.excerpt.length > 75
                      ? post.excerpt.slice(0, 75) + "..."
                      : post.excerpt}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
