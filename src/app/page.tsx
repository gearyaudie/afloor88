"use client";
import React from "react";
import Navbar from "./layouts/navbar";
import { Footer } from "./layouts/footer";
import { client } from "../../sanity.client";

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

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-white">
        <div className="bg-[url('/images/bg.png')] w-full px-8 h-full bg-no-repeat py-24 pb-36 bg-cover mx-auto text-center">
          <div className="text-white font-bold text-4xl max-w-screen-sm	 mx-auto pt-24 md:lg:text-6xl">
            Aksesoris lantai vinyl dan PVC No. 1
          </div>
          <div className="text-slate-100 mx-auto  max-w-screen-sm pt-8">
            Menjual berbagai jenis aksesoris lantai, pvc dan vinyl. Klik tombol
            dibawah dan kunjungi toko online kami sekarang.
          </div>
          <button
            className="bg-[#ec6169] mt-8 px-8 py-2 text-md text-white rounded-lg"
            onClick={() => redirectToPage("https://www.tokopedia.com/afloor")}
          >
            Lihat toko
          </button>
        </div>
      </main>
      <main className="bg-white">
        <div className="block md:lg:flex justify-center items-center max-w-screen-lg mx-auto pt-24 pb-24 gap-10">
          <div className="flex flex-col justify-center items-center mx-auto max-w-sm text-black px-8 order-2">
            <div className="font-bold text-4xl md:lg:text-5xl">
              Beragam Warna
            </div>
            <div className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sit voluptatem reiciendis esse asperiores accusamus veniam fugiat
              minus voluptates cupiditate.
            </div>
          </div>
          <div className="flex order-1 mx-auto justify-center items-center">
            <img
              src="/images/beragam-warna-1.png"
              alt=""
              className="w-72 h-fit hidden md:lg:block"
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
