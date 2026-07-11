import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='relative z-10 pb-17.5 text-[#e8cfb2] lg:pb-22.5 xl:pb-27.5'>
        {/* <!-- bg shapes --> */}
        <div className='absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50'>
          <div className='footer-bg-gradient h-[1.24px] w-full'></div>
          <div className='footer-bg-gradient h-[2.47px] w-full'></div>
          <div className='footer-bg-gradient h-[3.71px] w-full'></div>
          <div className='footer-bg-gradient h-[4.99px] w-full'></div>
          <div className='footer-bg-gradient h-[6.19px] w-full'></div>
          <div className='footer-bg-gradient h-[7.42px] w-full'></div>
          <div className='footer-bg-gradient h-[8.66px] w-full'></div>
          <div className='footer-bg-gradient h-[9.90px] w-full'></div>
          <div className='footer-bg-gradient h-[13px] w-full'></div>
        </div>

        <div className='relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0'>
          <div className='footer-divider-gradient absolute top-0 left-0 h-[1px] w-full'></div>

          <div className='flex flex-wrap justify-between'>
            <div className='mb-10 w-full max-w-[520px]'>
              <Link href='/' className='mb-8.5 inline-block'>
                <span className='text-xl font-semibold tracking-wide text-[#f4dec3]'>
                  Thank you for visiting my portfolio.
                </span>
              </Link>

              <div className='flex items-center gap-5'>
                <a
                  href='mailto:julissaorsborn@gmail.com'
                  aria-label='facebook'
                  className='text-[#dfbf98] duration-300 ease-in hover:text-[#fff3e3]'
                >
                  <svg
                    className='fill-current'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13 21.9506C18.0533 21.4489 22 17.1853 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.8379 5.43552 20.8734 10 21.8V16H7V13H10V9.79586C10 7.47449 11.9695 5.64064 14.285 5.80603L17 5.99996V8.99996H15C13.8954 8.99996 13 9.89539 13 11V13H17L16 16H13V21.9506Z'
                      fill=''
                    />
                  </svg>
                </a>

                <a
                  href='https://www.instagram.com'
                  aria-label='instagram'
                  className='text-[#dfbf98] duration-300 ease-in hover:text-[#fff3e3]'
                >
                  <svg
                    className='fill-current'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 7.2C9.3478 7.2 7.2 9.3478 7.2 12C7.2 14.6522 9.3478 16.8 12 16.8C14.6522 16.8 16.8 14.6522 16.8 12C16.8 9.3478 14.6522 7.2 12 7.2ZM12 15.06C10.3084 15.06 8.94 13.6916 8.94 12C8.94 10.3084 10.3084 8.94 12 8.94C13.6916 8.94 15.06 10.3084 15.06 12C15.06 13.6916 13.6916 15.06 12 15.06ZM17.1 6.3C17.1 6.99706 16.535 7.56 15.84 7.56C15.145 7.56 14.58 6.99706 14.58 6.3C14.58 5.60294 15.145 5.04 15.84 5.04C16.535 5.04 17.1 5.60294 17.1 6.3ZM20.4 8.04C20.3 6.42 19.92 5.04 18.78 3.9C17.64 2.76 16.26 2.38 14.64 2.28C13.02 2.18 10.98 2.16 12 2.16C13.02 2.16 10.98 2.18 9.36 2.28C7.74 2.38 6.36 2.76 5.22 3.9C4.08 5.04 3.7 6.42 3.6 8.04C3.5 9.66 3.48 11.7 3.48 12.72C3.48 13.74 3.5 15.78 3.6 17.4C3.7 19.02 4.08 20.4 5.22 21.54C6.36 22.68 7.74 23.06 9.36 23.16C10.98 23.26 13.02 23.28 12 23.28C10.98 23.28 13.02 23.26 14.64 23.16C16.26 23.06 17.64 22.68 18.78 21.54C19.92 20.4 20.3 19.02 20.4 17.4C20.5 15.78 20.52 13.74 20.52 12.72C20.52 11.7 20.5 9.66 20.4 8.04ZM18.54 17.28C18.45 18.7 18.14 19.48 17.66 20.02C17.17 20.58 16.47 20.92 15.12 21.01C13.77 21.1 12.28 21.12 12 21.12C11.72 21.12 10.23 21.1 8.88 21.01C7.53 20.92 6.83 20.58 6.34 20.02C5.86 19.48 5.55 18.7 5.46 17.28C5.37 15.86 5.34 14.35 5.34 12.72C5.34 11.09 5.37 9.58 5.46 8.16C5.55 6.74 5.86 5.96 6.34 5.42C6.83 4.86 7.53 4.52 8.88 4.43C10.23 4.34 11.72 4.32 12 4.32C12.28 4.32 13.77 4.34 15.12 4.43C16.47 4.52 17.17 4.86 17.66 5.42C18.14 5.96 18.45 6.74 18.54 8.16C18.63 9.58 18.66 11.09 18.66 12.72C18.66 14.35 18.63 15.86 18.54 17.28Z'
                      fill=''
                    />
                  </svg>
                </a>

                <a
                  href='https://github.com'
                  aria-label='github'
                  className='text-[#dfbf98] duration-300 ease-in hover:text-[#fff3e3]'
                >
                  <svg
                    className='fill-current'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_368_11839)'>
                      <path
                        d='M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z'
                        fill=''
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_368_11839'>
                        <rect width='24' height='24' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
