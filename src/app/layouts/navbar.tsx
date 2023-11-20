"use client";
import React from 'react';
import { useState } from 'react'
import Image from 'next/image'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { MobileDrawer } from './mobileDrawer';
import navbarStyles from '../styles/mobileDrawer.module.scss'
import Link from 'next/link';
import { useRouter } from "next/router";
import { usePathname} from 'next/navigation';

export default function Navbar() {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState("/images/afloor-logo-white.png");

  const changeLogoAndBg = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
      setLogo("/images/afloor-logo.png")
    } else {
      setNavbar(false)
      setLogo("/images/afloor-logo-white.png")
    }
  }

  React.useEffect(() => {
    changeLogoAndBg();
    window.addEventListener("scroll", changeLogoAndBg)
  }, [])


  const pathName = usePathname();

  return (
    <div 
      className={ navbar ? 'fixed w-full z-50 bg-white ease-in-out duration-300' : 'fixed w-full z-50 ease-in-out duration-300' }
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-0 px-6 flex-wrap">
        <div className="text-slate-700 font-bold text-xl">
          <img src={logo} alt="" style={{ width: 75 }} />
        </div>
        <div className="hidden lg:block md:block">
          <ul className="flex justify-center pr-24 text-sm">
            <li 
              className={navbar ? 'mr-12 text-slate-700 text-black' : 'mr-12 text-slate-700 text-white'}
            >
              <span className={pathName == "/"  ? "underline decoration-[#ec6169] decoration-4 underline-offset-8" : ""}>
                <Link href="/">Home</Link>
              </span>
            </li>
            <li 
              className={navbar ? 'mr-12 text-slate-700 text-black' : 'mr-12 text-slate-700 text-white'}
            >
                <Link href="/projects">
                  <span className={pathName == "/projects"  ? "underline decoration-[#ec6169]" : ""}>
                      Artikel
                  </span>
                </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="sm:block lg:hidden md:hidden">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </div>
  )
}
