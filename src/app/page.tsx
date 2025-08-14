"use client";
import React from "react";
import Navbar from "./layouts/navbar";
import { Footer } from "./layouts/footer";
import { client } from "../../sanity.client";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

import { redirect, usePathname } from "next/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [posts, setPosts] = React.useState();

  function redirectToPage(url: string) {
    window.open(url, "_blank");
  }

  async function getPosts() {
    const posts = await client.fetch(`*[_type == "post"]`);
    setPosts(posts);

    if (posts) {
      console.log(posts);
    }
  }

  React.useEffect(() => {
    getPosts();
  }, []);

  const pathName = usePathname();

  return (
    <>
      <div className="flex flex-col max-w-[1150px] mx-auto">
        <div className="flex justify-between items-center px-10">
          <img src="images/efloor.png" alt="" className="w-24 h-24" />
          <div className="flex gap-12 text-lg font-[500]">
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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="mx-8">
            <div className="relative bg-[url('/images/bg.png')] bg-cover bg-center my-2 mx-auto max-w-[1000px]">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Content on top */}
              <div className="relative z-10 flex">
                <div className="text-white flex-1">
                  <div className="flex flex-col justify-center h-full align-items-center pl-16">
                    <div className="font-[600] text-[36px] text-left leading-tight">
                      Lem Vinyl EFLOOR
                      <br />
                      Heavy Duty | For Projects
                    </div>
                    <div className="pt-8 flex gap-4">
                      <button className="bg-white text-black rounded-lg px-4 py-2 font-bold">
                        <a href="https://www.tokopedia.com/efloorid/lem-vinyl-lantai-efloor-1-kg-4-kg-20-kg-efloor-max-lem-kental-dan-murni-1730312274422761422?extParam=ivf%3Dfalse%3FextParam%3Dwhid%3D3621009&aff_unique_id=&channel=others&chain_key=">
                          Liat Produk Kami
                        </a>
                      </button>
                      <button
                        className="border-2 border-solid border-white rounded-lg px-4 py-2"
                        onClick={() =>
                          redirectToPage(
                            "https://wa.me/628561153725?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda"
                          )
                        }
                      >
                        Chat di Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  {/* Square img here */}
                  <img src="images/lem-vinyl.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-8">
            <div className="relative bg-[url('/images/bg.png')] bg-cover bg-center my-2 mx-auto max-w-[1000px]">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Content on top */}
              <div className="relative z-10 flex">
                <div className="text-white flex-1">
                  <div className="flex flex-col justify-center h-full align-items-center pl-16">
                    <div className="font-[600] text-[44px] text-left leading-tight">
                      Excellent Flooring. <br />
                      for Your Needs
                    </div>
                    <div className="pt-8 flex gap-4">
                      <button className="bg-white text-black rounded-lg px-4 py-2 font-bold">
                        <a href="https://www.tokopedia.com/efloorid/lantai-vinyl-3mm-efloor-pvc-high-quality-series-tahan-air-hw-3312-7fd62?extParam=src%3Dshop%26whid%3D3621009&aff_unique_id=&channel=others&chain_key=">
                          Liat Produk Kami
                        </a>
                      </button>
                      <button
                        className="border-2 border-solid border-white rounded-lg px-4 py-2"
                        onClick={() =>
                          redirectToPage(
                            "https://wa.me/628561153725?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda"
                          )
                        }
                      >
                        Chat di Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  {/* Square img here */}
                  <img src="images/lantai-vinyl-tahan-air.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-8">
            <div className="relative bg-[url('/images/bg.png')] bg-cover bg-center my-2 mx-auto max-w-[1000px]">
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Content on top */}
              <div className="relative z-10 flex">
                <div className="text-white flex-1">
                  <div className="flex flex-col justify-center h-full align-items-center pl-16">
                    <div className="font-[600] text-[36px] text-left leading-tight">
                      List Siku L <br />
                      End Molding EFLOOR
                    </div>
                    <div className="pt-8 flex gap-4">
                      <button className="bg-white text-black rounded-lg px-4 py-2 font-bold">
                        <a href="https://www.tokopedia.com/efloorid/list-siku-l-untuk-lantai-kayu-lantai-vinyl-lantai-parket-gg-9808-l8-e4955?extParam=ivf%3Dfalse%3FextParam%3Dwhid%3D3621009&aff_unique_id=&channel=others&chain_key=">
                          Liat Produk Kami
                        </a>
                      </button>
                      <button
                        className="border-2 border-solid border-white rounded-lg px-4 py-2"
                        onClick={() =>
                          redirectToPage(
                            "https://wa.me/628561153725?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20Anda"
                          )
                        }
                      >
                        Chat di Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  {/* Square img here */}
                  <img src="images/list-siku-l.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <main className="bg-[#28584C] mt-8 text-white">
        <div className="max-w-[1250px] text-center mx-auto px-8 py-12 flex justify-center">
          Terpercayai sejak tahun 2000. EFLOOR adalah toko flooring yang menjual
          berbagai jenis item seperti lantai parket, lantai vinyl, lantai
          karpet, list aksesoris vinyl seperti list siku l, list t molding, list
          plint/plank/skirting, list adaptasi/reduser strip. Lem vinyl, lem
          karpet, lem kayu tahan air WRG.
        </div>
      </main>

      <main className="bg-white">
        <div className="block md:lg:flex justify-center items-center max-w-screen-lg mx-auto pt-24 pb-24 gap-10">
          <div className="flex flex-col justify-center items-center mx-auto max-w-sm text-black order-2">
            <div className="font-bold text-3xl md:lg:text-3xl">
              List Siku L, List Adaptasi, Skirting/Plint/Plank, List T Moulding
            </div>
            <div className="pt-4">
              Menjual berbagai jenis list, aksesoris lantai vinyl, tersedia
              dalam 15+ jenis warna.
            </div>
          </div>
          <div className="flex order-1 mx-auto justify-center items-center">
            <img
              src="/images/beragam-warna-1.png"
              alt=""
              className="w-[338px] h-fit hidden md:lg:block"
            />
            <div>
              <img
                src="/images/beragam-warna-2.png"
                alt=""
                className="w-64 h-fit"
              />
              <img
                src="/images/beragam-warna-3.png"
                alt=""
                className="w-64 h-fit"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 mb-32 text-center">
          <div className="font-semibold text-3xl">List Paling Populer Kami</div>
          <div>
            <div className="flex my-12 gap-10 flex-wrap justify-center items-center">
              <div className="shadow-lg	bg-white rounded-2xl max-w-[300px] pb-8">
                <img src="/images/list-siku-l.png" alt="" />
                <div className="text-lg px-4 py-4 text-black text-left">
                  List Siku L / Penutup Wallpanel / End Moulding
                </div>
              </div>
              <div className="shadow-lg	bg-white rounded-2xl max-w-[300px] pb-8">
                <img src="/images/adaptasi.png" alt="" />
                <div className="text-lg px-4 py-4 text-black text-left">
                  List Siku L / Penutup Wallpanel / End Moulding
                </div>
              </div>
              <div className="shadow-lg	bg-white rounded-2xl max-w-[300px] pb-8">
                <img src="/images/skirting.webp" alt="" />
                <div className="text-lg px-4 py-4 text-black text-left">
                  List Plint/Plank, Skirting
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="bg-black">
        <div className="flex flex-col pt-24 pb-24 text-center justify-center items-center mx-auto px-8">
          <div className="font-bold text-4xl md:lg:text-5xl text-white">
            Produk kami
          </div>
          <div className="pt-4 text-white">
            Cari produk yang anda butuhkan berdasarkan etalase
          </div>
          <div className="flex my-12 gap-10 flex-wrap justify-center items-center">
            <div className="shadow-lg	bg-white rounded-3xl max-w-[225px] pb-8 shadow-[#ec6169]">
              <img src="/images/etalase/lem.png" alt="" />
              <div className="font-bold text-lg px-4 py-4 text-black">
                Lem vinyl/ PVC flooring
              </div>
              <button
                className="bg-white border-2 border-black py-2 px-8 font-bold rounded-lg text-black"
                onClick={() =>
                  redirectToPage("https://www.tokopedia.com/afloor/etalase/lem")
                }
              >
                Lihat
              </button>
            </div>
            <div className="shadow-lg	bg-white rounded-3xl max-w-[225px] pb-8 shadow-[#ec6169]">
              <img src="/images/etalase/wood.png" alt="" />
              <div className="font-bold text-lg px-4 py-4 text-black">
                Aksesoris parket / vinyl
              </div>
              <button
                className="bg-white border-2 border-black py-2 px-8 font-bold rounded-lg text-black"
                onClick={() =>
                  redirectToPage(
                    "https://www.tokopedia.com/afloor/etalase/aksesoris-parketvinyl"
                  )
                }
              >
                Lihat
              </button>
            </div>
            <div className="shadow-lg	bg-white rounded-3xl max-w-[225px] pb-8 shadow-[#ec6169]">
              <img src="/images/etalase/amplop.png" alt="" />
              <div className="font-bold text-lg px-4 py-4 text-black">
                Amplop bubble
              </div>
              <button
                className="bg-white border-2 border-black py-2 px-8 font-bold rounded-lg text-black"
                onClick={() =>
                  redirectToPage(
                    "https://www.tokopedia.com/afloor/etalase/amplop-bubble"
                  )
                }
              >
                Lihat
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="bg-white">
        <div className="flex flex-col pt-24 pb-24 text-center justify-center items-center mx-auto">
          <div className="font-bold text-4xl text-black md:lg:text-5xl">
            Temui kami di
          </div>
          <div className="flex gap-8 pt-16 px-8 flex-wrap justify-center items-center">
            <div className="bg-gradient-to-br from-white via-green-200 to-green-300 shadow-2xl max-w-[500px] relative text-left rounded-xl border-4 flex flex-col relative">
              <div className="pt-8 px-8">
                <div className="font-bold text-xl text-black">Toko Ijo</div>
                <div className="text-black">
                  Kunjungi lapak kami di tokopedia dengan rating 4.9 bintang
                </div>
              </div>
              <img
                src="/images/tokped3.png"
                alt=""
                className="mx-auto text-right rounded-br-lg w-[90%] mt-8 bottom-0 right-0 shadow-lg"
              />
            </div>
            <div>
              <div className="bg-[#fc6203] shadow-2xl max-w-[300px] rounded-xl border-4 relative">
                <div className="pt-8 text-left px-8">
                  <div className="font-bold text-xl text-white">Toko Oren</div>
                  <div className="text-white">
                    Kunjungi lapak kami di Shopee dengan rating 4.9 bintang
                  </div>
                </div>
                <img
                  src="/images/shopee.png"
                  alt=""
                  className="w-48 text-center rounded-xl mx-auto pt-8 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="bg-white">
        <Footer />
      </main>
    </>
  );
}
