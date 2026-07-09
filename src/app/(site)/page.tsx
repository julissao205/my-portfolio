import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julissa Orsborn | Software Developer Portfolio',
  description:
    'Portfolio for Julissa Orsborn showcasing software development skills, technical experience, and career goals.',
};

export default function Home() {
  return (
    <main className='relative overflow-hidden bg-[#89706f] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#e88b6840] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#d28b7138] blur-[120px]' />
      </div>

      <section className='relative mx-auto grid max-w-[1170px] gap-10 px-4 pt-36 pb-20 sm:px-8 lg:grid-cols-12 lg:items-center xl:px-0'>
        <div className='lg:col-span-7'>
          <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Julissa Orsborn
          </h1>
          <p className='mb-8 max-w-2xl text-base leading-relaxed text-[#f2e8e5] sm:text-lg'>
            Entry-level developer with a strong troubleshooting mindset and a
            background in military signal support work. I am proficient in
            HTML/CSS and JavaScript, and I am actively seeking software
            development opportunities where I can contribute, learn quickly, and
            grow as a professional in the field.
          </p>
        </div>

        <div className='lg:col-span-5'>
          <div className='rounded-3xl border border-[#c08b7980] bg-[#9f858099] p-6 shadow-2xl backdrop-blur'>
            <h2 className='mb-4 text-lg font-semibold text-[#f8fafc]'>
              Career Focus
            </h2>
            <ul className='space-y-3 text-sm text-[#f2e8e5]'>
              <li className='rounded-lg border border-[#c08b7999] bg-[#89706fcc] p-3'>
                Frontend development fundamentals
              </li>
              <li className='rounded-lg border border-[#c08b7999] bg-[#89706fcc] p-3'>
                Clean communication and team collaboration
              </li>
              <li className='rounded-lg border border-[#c08b7999] bg-[#89706fcc] p-3'>
                Problem-solving under pressure
              </li>
              <li className='rounded-lg border border-[#c08b7999] bg-[#89706fcc] p-3'>
                Continuous learning in software engineering
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='relative mx-auto max-w-[1170px] px-4 pb-24 sm:px-8 xl:px-0'>
        <div className='mb-10 max-w-3xl'>
          <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Projects I&apos;ve Worked On
          </h2>
          <p className='mt-4 text-base leading-relaxed text-[#f2e8e5] sm:text-lg'>
            A few examples of projects where I applied my frontend and
            troubleshooting skills to build reliable user-focused experiences.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <article className='rounded-2xl border border-[#c08b7980] bg-[#9f858099] p-6 shadow-lg backdrop-blur'>
            <h3 className='text-lg font-semibold text-[#f8fafc]'>
              Portfolio Website
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[#f2e8e5]'>
              Designed and built a personal portfolio using Next.js and Tailwind
              CSS with dedicated pages for skills, experience, education, and
              contact information.
            </p>
          </article>

          <article className='rounded-2xl border border-[#c08b7980] bg-[#9f858099] p-6 shadow-lg backdrop-blur'>
            <h3 className='text-lg font-semibold text-[#f8fafc]'>
              JavaScript Practice Apps
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[#f2e8e5]'>
              Built small interactive applications to strengthen JavaScript
              fundamentals, including DOM updates, form handling, and responsive
              UI behavior.
            </p>
          </article>

          <article className='rounded-2xl border border-[#c08b7980] bg-[#9f858099] p-6 shadow-lg backdrop-blur'>
            <h3 className='text-lg font-semibold text-[#f8fafc]'>
              Communication Support Workflows
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[#f2e8e5]'>
              Applied a structured troubleshooting process to diagnose and
              resolve technical issues, then documented solutions to improve
              consistency and team readiness.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
