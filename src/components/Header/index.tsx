'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import menuData from './menuData';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <>
      <header
        className={`sticky top-0 left-0 z-1000 w-full ${
          stickyMenu
            ? 'before:features-row-border bg-[#3d2a1fd6] py-4! shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-lg transition duration-100 before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full lg:py-0!'
            : 'bg-[linear-gradient(180deg,rgba(39,25,18,0.58)_0%,rgba(39,25,18,0)_100%)] py-7 lg:py-0'
        }`}
      >
        <div className='relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0'>
          <div className='flex w-full items-center justify-between lg:w-1/4'>
            <Link
              href='/'
              aria-label='Julissa Orsborn home'
              className='inline-flex items-center'
            >
              <Image
                src='/images/logo/logo.svg'
                alt='Julissa Orsborn logo'
                width={44}
                height={44}
                priority
                className='h-11 w-11 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]'
              />
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className='block lg:hidden'
            >
              <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                <span className='du-block absolute right-0 h-full w-full'>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-[#f4dec3] delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? 'w-full! delay-300' : 'w-0'
                    }`}
                  ></span>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-[#f4dec3] delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? 'w-full! delay-400' : 'w-0'
                    }`}
                  ></span>
                  <span
                    className={`relative top-0 left-0 my-1 block h-0.5 rounded-sm bg-[#f4dec3] delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? 'w-full! delay-500' : 'w-0'
                    }`}
                  ></span>
                </span>
                <span className='du-block absolute right-0 h-full w-full rotate-45'>
                  <span
                    className={`absolute top-0 left-2.5 block h-full w-0.5 rounded-sm bg-[#f4dec3] delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? 'h-0! delay-0' : 'h-full'
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 block h-0.5 w-full rounded-sm bg-[#f4dec3] delay-400 duration-200 ease-in-out ${
                      !navigationOpen ? 'h-0! delay-200' : 'h-0.5'
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div
            className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-3/4 ${
              navigationOpen
                ? 'visible! relative mt-4 h-auto! max-h-[400px] overflow-y-scroll rounded-md border border-[#b89169]/35 bg-[#3a261bcf] p-7.5 shadow-lg'
                : ''
            }`}
          >
            <nav className='flex flex-1 justify-end'>
              <ul className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-end lg:gap-2'>
                {menuData.map((menuItem, key) => (
                  <li
                    key={key}
                    className={`nav__menu group relative ${
                      stickyMenu ? 'lg:py-4' : 'lg:py-7'
                    }`}
                  >
                    {menuItem.submenu ? (
                      <>
                        <DropDown menuItem={menuItem} />
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={`book-nav-tab relative px-5 py-3 text-[15px] lg:px-6 lg:py-3.5 lg:text-base ${
                          pathUrl === menuItem.path
                            ? 'book-nav-tab-active'
                            : 'book-nav-tab-inactive'
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
