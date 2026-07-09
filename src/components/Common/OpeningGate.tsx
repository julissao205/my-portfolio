'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type Phase = 'intro' | 'opening' | 'done';

export default function OpeningGate({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const closeTimerRef = useRef<number | null>(null);

  const isOpening = phase === 'opening';
  const isDone = phase === 'done';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setPhase('done');
      return;
    }

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setPhase('done');
      }
    };

    mediaQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isDone ? '' : 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDone]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleOpenBook = () => {
    if (isOpening || isDone) {
      return;
    }

    setPhase('opening');

    closeTimerRef.current = window.setTimeout(() => {
      setPhase('done');
    }, 1650);
  };

  const handleSkipIntro = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }

    setPhase('done');
  };

  if (isDone) {
    return <>{children}</>;
  }

  return (
    <div className='fixed inset-0 z-[99999] overflow-hidden text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#8f6a52_0%,#624734_45%,#2f211a_100%)]' />
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,#ffffff08_45%,transparent_100%)]' />
      <div
        className='pointer-events-none absolute inset-0 opacity-25'
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 18%, rgba(255, 228, 192, 0.08) 0 1px, transparent 1px 100%), radial-gradient(circle at 78% 62%, rgba(255, 228, 192, 0.06) 0 1px, transparent 1px 100%)',
          backgroundSize: '3px 3px, 4px 4px',
        }}
      />

      <button
        type='button'
        onClick={handleSkipIntro}
        className='absolute top-5 right-5 z-[90] rounded-md border border-[#d2a87b] bg-[#3c271ca8] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#f6e5cc] uppercase transition hover:bg-[#523628cf]'
      >
        Skip intro
      </button>

      <div className='relative flex min-h-dvh items-center justify-center px-4 py-8 sm:px-8'>
        <div className='w-full max-w-[1120px] [perspective:2400px]'>
          <div className='relative aspect-[16/10]'>
            <div className='absolute inset-0 rounded-[22px] bg-[#140f0b] shadow-[0_30px_80px_rgba(0,0,0,0.65)]' />

            <div className='absolute top-[3.8%] right-[2%] bottom-[3.8%] left-[2%] rounded-[16px] bg-[linear-gradient(135deg,#f7efdd_0%,#ebdcc6_45%,#cfb89a_100%)] shadow-[inset_0_0_0_1px_rgba(121,88,58,0.15)]' />

            <div className='pointer-events-none absolute top-[2.8%] bottom-[2.8%] left-1/2 w-[10px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#4f3425_0%,#231710_100%)] shadow-[inset_0_0_0_1px_rgba(255,225,192,0.12)]' />

            <div
              className='absolute top-[6.5%] right-[4.2%] bottom-[7.5%] left-[52.2%] overflow-hidden rounded-[12px] border border-[#b58a62] bg-[linear-gradient(150deg,#f8f0df_0%,#e7d4b8_100%)] shadow-[inset_0_0_0_1px_rgba(255,243,224,0.7),inset_0_-14px_26px_rgba(95,63,41,0.14)] transition-all duration-[800ms]'
              style={{
                clipPath:
                  'polygon(1.8% 0%, 100% 0%, 100% 100%, 1.8% 100%, 0% 50%)',
                opacity: isOpening ? 1 : 0,
                transform: isOpening ? 'scale(1)' : 'scale(0.975)',
                transitionDelay: isOpening ? '700ms' : '0ms',
              }}
            >
              <div
                className='pointer-events-none absolute inset-0 opacity-20'
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(118, 85, 55, 0.08) 0 1px, transparent 1px 4px)',
                }}
              />
              <div className='relative h-full w-full overflow-hidden'>
                <div className='intro-right-page-content pointer-events-none h-full overflow-hidden'>
                  {children}
                </div>
              </div>
            </div>

            <div className='pointer-events-none absolute right-[1.5%] bottom-[6.5%] left-[4.4%] h-[3.5%] rounded-[10px] bg-[linear-gradient(180deg,#cdb291_0%,#b49773_38%,#8f7558_100%)] shadow-[0_5px_12px_rgba(0,0,0,0.25)]' />

            <div className='pointer-events-none absolute top-[5.6%] right-[1.4%] bottom-[6.6%] w-[2.4%] rounded-r-[12px] bg-[linear-gradient(90deg,#f0dfc2_0%,#e1c9a7_38%,#b6936a_100%)] shadow-[inset_0_0_0_1px_rgba(125,93,61,0.35)]' />

            <div
              className='pointer-events-none absolute top-[4.2%] right-[2.4%] bottom-[4.2%] left-[2.8%] rounded-[14px] opacity-40'
              style={{
                backgroundImage:
                  'repeating-linear-gradient(180deg, rgba(92, 64, 40, 0.08) 0 1px, transparent 1px 3px)',
              }}
            />

            <div className='absolute top-[2%] bottom-[2%] left-[2.4%] w-[18px] rounded-full bg-[linear-gradient(180deg,#3f2a1f_0%,#1f1510_100%)] shadow-[inset_-2px_0_6px_rgba(255,255,255,0.08),inset_2px_0_6px_rgba(0,0,0,0.45)]' />

            <div className='pointer-events-none absolute top-[2.4%] bottom-[2.4%] left-[3.8%] w-[6px] rounded-full bg-[linear-gradient(180deg,#4b3124_0%,#231710_100%)] opacity-80 shadow-[inset_0_0_0_1px_rgba(255,224,193,0.1)]' />

            <div
              className='absolute inset-0 rounded-[22px] border border-[#8f6246] bg-[linear-gradient(140deg,#6f4c36_0%,#5a3d2c_38%,#7d5a41_100%)] shadow-[inset_0_0_0_1px_rgba(255,228,197,0.08),0_35px_50px_rgba(0,0,0,0.45)] transition-all duration-[1350ms] ease-[cubic-bezier(0.22,0.9,0.2,1)] [backface-visibility:hidden] [transform-style:preserve-3d] before:pointer-events-none before:absolute before:inset-0 before:rounded-[22px] before:bg-[radial-gradient(circle_at_22%_18%,rgba(255,231,196,0.2)_0%,rgba(255,231,196,0.04)_32%,rgba(0,0,0,0.35)_100%)]'
              style={{
                transformOrigin: '2.2% 50%',
                transform: isOpening
                  ? 'translateZ(2px) rotateY(-172deg)'
                  : 'translateZ(2px) rotateY(0deg)',
                opacity: isOpening ? 0.98 : 1,
              }}
            >
              <div
                className='pointer-events-none absolute inset-0 rounded-[22px] opacity-45'
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(35deg, rgba(255, 224, 190, 0.06) 0 2px, transparent 2px 6px), repeating-linear-gradient(145deg, rgba(0, 0, 0, 0.1) 0 1px, transparent 1px 5px)',
                }}
              />

              <div className='absolute top-[8%] right-[8%] bottom-[8%] left-[8%] rounded-[14px] border border-[#d2a87b] shadow-[inset_0_0_0_1px_rgba(255,244,227,0.08),0_0_0_1px_rgba(87,52,29,0.5)]'>
                <div className='pointer-events-none absolute top-[7%] right-[6%] bottom-[7%] left-[6%] rounded-[12px] border border-[#d6b08a]/55' />
                <div className='flex h-full flex-col items-center justify-center text-center'>
                  <p className='mb-3 text-xs font-semibold tracking-[0.32em] text-[#f1d9bf] uppercase sm:text-sm'>
                    Portfolio Volume I
                  </p>
                  <h1 className='mb-4 max-w-[19ch] text-2xl font-semibold tracking-tight text-[#fff4e7] sm:text-4xl'>
                    Julissa Orsborn
                  </h1>
                  <p className='mb-8 max-w-[26ch] text-sm leading-relaxed text-[#f2deca] sm:text-base'>
                    Open the book to explore projects, skills, and experience.
                  </p>

                  <button
                    type='button'
                    onClick={handleOpenBook}
                    className='inline-flex items-center justify-center rounded-lg border border-[#e3bc95] bg-[linear-gradient(180deg,#f1cc9f_0%,#d9ab78_100%)] px-6 py-3 text-sm font-semibold text-[#3c2618] shadow-[0_8px_22px_rgba(28,17,10,0.3)] transition hover:brightness-105 focus:ring-2 focus:ring-[#e3bc95] focus:ring-offset-2 focus:ring-offset-[#6c4b36] focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:text-base'
                    disabled={isOpening}
                  >
                    {isOpening ? 'opening...' : 'open the book'}
                  </button>
                </div>

                <div className='pointer-events-none absolute bottom-[8%] left-1/2 h-[1px] w-[36%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(250,227,197,0.7)_50%,transparent_100%)]' />
              </div>

              <div className='pointer-events-none absolute top-[1.5%] right-[1.5%] bottom-[1.5%] left-[1.5%] rounded-[20px] border border-[#9c7054]/60' />

              <div
                className='pointer-events-none absolute inset-0 rounded-[22px] border border-[#7f5a40] bg-[linear-gradient(145deg,#563827_0%,#6a4732_40%,#2f2018_100%)] [backface-visibility:hidden]'
                style={{ transform: 'translateZ(-2px) rotateY(180deg)' }}
              >
                <div className='absolute top-[10%] right-[12%] bottom-[10%] left-[12%] rounded-[10px] border border-[#b48a63]/40 opacity-75' />
              </div>
            </div>

            <div
              className='absolute top-[5.3%] left-[50.15%] h-[89.4%] w-[45.2%] origin-left rounded-[12px] border border-[#e0c8aa]/60 bg-[linear-gradient(160deg,#f6ebd8_0%,#ead8be_70%,#dec4a4_100%)] shadow-[inset_0_0_0_1px_rgba(255,245,229,0.55)] transition-all duration-[1300ms] ease-[cubic-bezier(0.22,0.9,0.2,1)] [backface-visibility:hidden] [transform-style:preserve-3d]'
              style={{
                transformOrigin: '0% 50%',
                transform: isOpening
                  ? 'rotateY(-158deg) translateX(-0.8%)'
                  : 'rotateY(0deg) translateX(0%)',
                opacity: isOpening ? 0.95 : 1,
              }}
            />

            <div
              className='pointer-events-none absolute inset-0 rounded-[24px] border border-[#d7b088]/25 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.28)_100%)] transition duration-700'
              style={{ opacity: isOpening ? 0 : 1 }}
            />

            <div
              className='pointer-events-none absolute top-[5.2%] right-[4%] bottom-[5.2%] left-[4.6%] rounded-[14px] bg-[linear-gradient(90deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.14)_28%,rgba(0,0,0,0.04)_52%,transparent_76%)] transition-all duration-[1150ms] ease-out'
              style={{
                opacity: isOpening ? 0.18 : 0.72,
                clipPath: isOpening
                  ? 'polygon(0 0, 10% 0, 14% 100%, 0 100%)'
                  : 'polygon(0 0, 70% 0, 58% 100%, 0 100%)',
              }}
            />
          </div>

          <p className='mt-5 text-center text-xs tracking-[0.2em] text-[#e2c6ae] uppercase sm:text-sm'>
            Chapter One: Developer Journey
          </p>
        </div>
      </div>
    </div>
  );
}
