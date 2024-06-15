'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaDatabase, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAccount, useDisconnect } from 'wagmi';
import { IconType } from 'react-icons/lib';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const router = useRouter();
  const { pathname } = router;
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const storedSidebarExpanded = 'true';

  const sidebarMenu = [
    {
      name: 'Opportunities',
      icon: 'FaDatabase',
      pathname: '/assets',
      notification: 1,
    },
  ];

  const iconComponents: { [key: string]: IconType } = {
    FaDatabase,
  };

  const FaIcon = ({ icon }: { icon: string }) => {
    const IconComponent = iconComponents[icon];

    if (!IconComponent) {
      return null; // Handle unknown icons or provide a default icon
    }

    return <IconComponent />;
  };

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const logout = async () => {
    const res = await axios.post('/api/auth/logout');
    if (res.status === 200) {
      await disconnect();
      localStorage.clear();
      sessionStorage.clear();
      router.push('/asset');
    }
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#7FCE98] text-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 rounded-br-2xl rounded-tr-2xl ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <img src="https://phyken.network/logo.png" alt="Logo" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="no-scrollbar overflow-y-auto duration-300 ease-linear flex flex-col justify-between flex-grow">
        <nav className="flex flex-col mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <ul className="mb-6 flex flex-col gap-1.5">
            {sidebarMenu.map((menu, i) => {
              const isActive = pathname.startsWith(menu.pathname);
              return (
                <li key={i}>
                  <Link
                    href={menu.pathname}
                    className={`group relative flex items-center gap-2.5 px-4 py-2 font-semibold text-black hover:text-white duration-300 ease-in-out hover:bg-black hover:rounded-full dark:hover:bg-primary ${
                      isActive &&
                      'bg-white text-primary dark:bg-meta-4 dark:text-white rounded-full dark:hover:bg-primary hover:text-black'
                    }`}
                  >
                    <FaIcon icon={menu.icon} />
                    {menu.name}
                    {menu.notification ? (
                      <span className="absolute right-4 block rounded-full bg-red py-1 px-2 text-xs font-medium text-white">
                        {menu.notification}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="px-4 py-4">
          {isConnected && (
            <button
              onClick={logout}
              className="group relative flex items-center gap-2.5 px-4 py-2 font-bold text-white duration-300 ease-in-out hover:bg-graydark hover:rounded-full dark:hover:bg-meta-4"
            >
              <FaSignOutAlt />
              Logout
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
