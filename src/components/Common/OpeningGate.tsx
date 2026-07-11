'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const OpeningGate = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || pathname !== '/') {
      setIsVisible(false);
      setIsOpening(false);
      return;
    }

    const navigationEntries = window.performance.getEntriesByType(
      'navigation',
    ) as PerformanceNavigationTiming[];
    const navigationType = navigationEntries[0]?.type;

    if (navigationType === 'reload') {
      setIsVisible(true);
      setIsOpening(false);
    } else {
      setIsVisible(false);
      setIsOpening(false);
    }
  }, [mounted, pathname]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (isVisible) {
      document.body.classList.add('book-gate-lock');
    } else {
      document.body.classList.remove('book-gate-lock');
    }

    return () => {
      document.body.classList.remove('book-gate-lock');
    };
  }, [isVisible, mounted]);

  const handleOpen = () => {
    if (isOpening) {
      return;
    }

    setIsOpening(true);

    window.setTimeout(() => {
      setIsVisible(false);
      setIsOpening(false);
    }, 1650);
  };

  if (!mounted || !isVisible || pathname !== '/') {
    return null;
  }

  return (
    <div className={`book-gate ${isOpening ? 'is-opening' : ''}`}>
      <div className='book-gate-glow' aria-hidden='true' />
      <div className='book-gate-dust' aria-hidden='true' />

      <div className='book-gate-stage'>
        <div className='book-gate-cover' aria-hidden='true'>
          <div className='book-gate-cover-panel book-gate-cover-left'>
            <div className='book-gate-foil-stack'>
              <span className='book-gate-foil-title'>Julissa Orsborn</span>
              <span className='book-gate-foil-sub'>Portfolio Volume I</span>
            </div>
          </div>
        </div>

        <div className='book-gate-pages'>
          <button
            type='button'
            className='book-gate-button'
            onClick={handleOpen}
            disabled={isOpening}
          >
            {isOpening ? 'Opening...' : 'Open the Book'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpeningGate;
