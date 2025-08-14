export const revalidate = 60;

import React from "react";
import { client } from "../../../sanity.client";
import { SharedNavbar } from "../components/shared-navbar";
import Link from "next/link";
import { Card } from "@mui/material";

type Product = {
  _id: string;
  name: string;
  image: any;
  description: string;
  slug: { current: string };
  price: string;
};

export default async function ProductsMain() {
  const products: Product[] = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      description,
      slug,
      price,
      image {
        asset->{
          url
        }
      }
    }`
  );

  console.log(products);
  return (
    <div className="bg-white text-black h-full">
      <SharedNavbar />

      <div className="bg-white text-black h-full">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center text-3xl font-600 mb-20 mt-16">
            Semua produk
          </div>
          <div className="bg-white flex gap-10 h-full flex-wrap">
            {products.map((product) => (
              <Card key={product._id} className="w-[325px] shadow-lg">
                {product.image && (
                  <img
                    src={product.image?.asset?.url}
                    alt={product.name}
                    style={{ width: "full", height: "auto" }}
                  />
                )}
                <Link href={`/products/${product.slug?.current}`}>
                  <div className="flex justify-center items-center w-full bg-grey py-6 w-full">
                    <div className="text-[20px] font-[600] text-center">
                      {product.name}
                    </div>
                    <div className="text-sm text-[#808080]">
                      {product?.description?.length > 75
                        ? product?.description?.slice(0, 75) + "..."
                        : product?.description}
                    </div>
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
