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
};

export default async function BlogMain() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"]{
      _id,
      title,
      slug,
      content,
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center text-2xl font-500 mb-12">
            All Blog Posts
          </div>
          <div className="bg-white flex gap-8 h-full">
            {posts.map((post) => (
              <Card key={post._id} className="w-[300px]">
                {post.img && (
                  <img
                    src={post.img?.asset?.url}
                    alt={post.title}
                    style={{ width: "full", height: "auto" }}
                  />
                )}
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="text-md font-500 py-4 px-4">{post.title}</div>
                </Link>

                <div className="px-4 pb-4 text-sm text-gray-500">
                  {/* <PortableText value={post.content.slice(0, 1)} /> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
