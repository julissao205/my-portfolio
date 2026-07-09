import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Julissa Orsborn',
  description: 'Professional experience and background of Julissa Orsborn.',
};

export default function ExperiencePage() {
  return (
    <main className='relative overflow-hidden bg-[#89706f] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#e88b6840] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#d28b7138] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[1170px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-8 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl'>
          Professional Background
        </h1>

        <div className='rounded-3xl border border-[#c08b7985] bg-[#9f858099] p-6 backdrop-blur sm:p-8'>
          <div className='mb-6 flex flex-wrap items-center justify-between gap-4'>
            <div>
              <h2 className='text-xl font-semibold text-white'>
                25U Signal Support Systems Specialist
              </h2>
              <p className='text-sm text-[#f2e8e5]'>
                US Army | 07/2023 - 04/2026
              </p>
            </div>
            <span className='rounded-full border border-[#e88b68aa] bg-[#e88b6826] px-4 py-1 text-xs font-semibold tracking-wide text-[#fff3ef]'>
              Systems + Troubleshooting
            </span>
          </div>

          <ul className='grid gap-4 text-sm leading-relaxed text-[#f2e8e5] sm:grid-cols-2'>
            <li className='rounded-xl border border-[#c08b7985] bg-[#89706fcc] p-4'>
              Maintained and repaired communication systems to keep
              mission-critical technology operational.
            </li>
            <li className='rounded-xl border border-[#c08b7985] bg-[#89706fcc] p-4'>
              Operated secure communication equipment, strengthening procedural
              and technical discipline.
            </li>
            <li className='rounded-xl border border-[#c08b7985] bg-[#89706fcc] p-4'>
              Diagnosed and resolved equipment issues during training exercises
              with tight time constraints.
            </li>
            <li className='rounded-xl border border-[#c08b7985] bg-[#89706fcc] p-4'>
              Documented maintenance tasks and system status updates for
              cross-team alignment.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
