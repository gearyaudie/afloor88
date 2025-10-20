"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const SharedNavbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col max-w-[1150px] mx-auto">
      <div className="flex justify-between items-center px-10">
        <a href="/">
          <img src="/images/efloor.png" alt="" className="w-24 h-24" />
        </a>
        <div className="gap-12 text-lg font-[500] d-none md:lg:flex">
          <div>
            <Link href="/blog">
              <span
                className={
                  pathName == "/blog" ? "underline decoration-[#ec6169]" : ""
                }
              >
                Artikel
              </span>
            </Link>
          </div>
          <div>
            <Link href="/products">
              <span
                className={
                  pathName == "/products"
                    ? "underline decoration-[#ec6169]"
                    : ""
                }
              >
                Products
              </span>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <span
                className={
                  pathName == "/projects"
                    ? "underline decoration-[#ec6169]"
                    : ""
                }
              >
                Projects
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
