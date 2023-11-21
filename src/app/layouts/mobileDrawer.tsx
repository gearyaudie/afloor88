"use client";

import React from "react"
import navbarStyles from '../styles/mobileDrawer.module.scss'
import Link from "next/link";
import DragHandle from '@mui/icons-material/DragHandle';

export function MobileDrawer() {

    const [sidebarOpened, setSidebarOpened] = React.useState(false);

    function lockScroll() {
      document.body.classList.toggle('lock-scroll');
    }


  return (
    <>
      <nav className={navbarStyles.navbar}>
        <div className={`${navbarStyles.container2} ${navbarStyles.flex}`}>
          <nav className={navbarStyles.menuMobile}>
            <DragHandle onClick={() => {
              setSidebarOpened(true);
              lockScroll();
            }}/>
            <div
              className={
                sidebarOpened
                  ? `${navbarStyles.navSidebar} ${navbarStyles.active}`
                  : navbarStyles.navSidebar
              }
            >
              <button
                className={navbarStyles.closeIcon}
                onClick={() => {
                  setSidebarOpened(false);
                  lockScroll();
                }}
              >
                <img
                  src="https://i.ibb.co/Ykxn2Mk/CITYPNG-COM-PNG-Close-X-Logo-White-Icon-736x736.png"
                  alt=""
                />
              </button>
              <div className={navbarStyles.navSidebarContent}>
                <li onClick={() => setSidebarOpened(false)}>
                  <Link href="/" onClick={() => lockScroll()}>Home</Link>
                </li>
                <li onClick={() => setSidebarOpened(false)}>
                  <Link href="/projects" onClick={() => lockScroll()}>Artikel</Link>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  )
}

