import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Julissa Orsborn',
  description: 'Professional experience and background of Julissa Orsborn.',
};

export default function ExperiencePage() {
  return (
    <main className='relative overflow-hidden text-[#5b3f2b]'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#bf8e6033] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#a4774d2e] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[1170px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-8 text-4xl leading-tight font-semibold tracking-tight text-[#482f20] sm:text-5xl'>
          Professional Background
        </h1>

        <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(145deg,#f6e8d4_0%,#e8d2b6_100%)] p-6 shadow-[0_16px_28px_rgba(64,39,22,0.18)] sm:p-8'>
          <div className='mb-6 flex flex-wrap items-center justify-between gap-4'>
            <div>
              <h2 className='text-xl font-semibold text-[#4b3020]'>
                25U Signal Support Systems Specialist
              </h2>
              <p className='text-sm text-[#6d4e38]'>
                US Army | 07/2023 - 04/2026
              </p>
            </div>
            <span className='rounded-full border border-[#b6885f] bg-[#f0dfc8] px-4 py-1 text-xs font-semibold tracking-wide text-[#6d4a31]'>
              Systems + Troubleshooting
            </span>
          </div>

          <ul className='grid gap-4 text-sm leading-relaxed text-[#6a4a34] sm:grid-cols-2'>
            <li className='rounded-xl border border-[#9e714b52] bg-[#f3e4ce] p-4'>
              Maintained and repaired communication systems to keep
              mission-critical technology operational.
            </li>
            <li className='rounded-xl border border-[#9e714b52] bg-[#f3e4ce] p-4'>
              Operated secure communication equipment, strengthening procedural
              and technical discipline.
            </li>
            <li className='rounded-xl border border-[#9e714b52] bg-[#f3e4ce] p-4'>
              Diagnosed and resolved equipment issues during training exercises
              with tight time constraints.
            </li>
            <li className='rounded-xl border border-[#9e714b52] bg-[#f3e4ce] p-4'>
              Documented maintenance tasks and system status updates for
              cross-team alignment.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
