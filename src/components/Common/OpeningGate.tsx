'use client';

import { useEffect, useState } from 'react';

export default function OpeningGate() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleContinue = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-[99999] overflow-hidden bg-[#89706f] bg-cover bg-center bg-no-repeat text-white'
      style={{ backgroundImage: "url('/images/opening/opening-bg.jpg')" }}
    >
      <div className='pointer-events-none absolute inset-0 bg-[#2d201f80]' />

      <div className='relative flex min-h-dvh items-center justify-center px-4 sm:px-8'>
        <div className='w-full max-w-xl rounded-3xl border border-[#c08b7985] bg-[#9f8580cc] p-8 text-center shadow-2xl backdrop-blur sm:p-12'>
          <p className='mb-4 text-sm font-medium tracking-[0.24em] text-[#ffe1d6] uppercase'>
            Welcome
          </p>
          <h1 className='mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Julissa Orsborn Portfolio
          </h1>
          <p className='mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#f2e8e5] sm:text-base'>
            Explore projects, skills, and experience in a focused space crafted
            for software development opportunities.
          </p>

          <button
            type='button'
            onClick={handleContinue}
            className='inline-flex items-center justify-center rounded-xl border border-[#c08b79] bg-[#89706f] px-7 py-3 text-sm font-semibold text-white transition hover:border-[#c08b79] hover:bg-[#c08b79] focus:ring-2 focus:ring-[#c08b79] focus:ring-offset-2 focus:ring-offset-[#9f8580] focus:outline-none'
          >
            click to continue
          </button>
        </div>
      </div>
    </div>
  );
}
