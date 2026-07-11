import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julissa Orsborn | Software Developer Portfolio',
  description:
    'Portfolio for Julissa Orsborn showcasing software development skills, technical experience, and career goals.',
};

export default function Home() {
  return (
    <main className='relative overflow-hidden text-[#5b3f2b]'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#bf8e6033] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#a4774d2e] blur-[120px]' />
      </div>

      <section className='relative mx-auto grid max-w-[1170px] gap-10 px-4 pt-10 pb-20 sm:px-8 lg:grid-cols-12 lg:items-center xl:px-0'>
        <div className='lg:col-span-7'>
          <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-[#482f20] sm:text-5xl lg:text-6xl'>
            Julissa Orsborn
          </h1>
          <p className='mb-8 max-w-2xl text-base leading-relaxed text-[#6d4e38] sm:text-lg'>
            Entry-level developer with a strong troubleshooting mindset and a
            background in military signal support work. I am proficient in
            HTML/CSS and JavaScript, and I am actively seeking software
            development opportunities where I can contribute, learn quickly, and
            grow as a professional in the field.
          </p>
        </div>

        <div className='lg:col-span-5'>
          <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(145deg,#f6e8d4_0%,#e8d2b6_100%)] p-6 shadow-[0_16px_28px_rgba(64,39,22,0.18)]'>
            <h2 className='mb-4 text-lg font-semibold text-[#4b3020]'>
              Career Focus
            </h2>
            <ul className='space-y-3 text-sm text-[#6a4a34]'>
              <li className='rounded-lg border border-[#9e714b52] bg-[#f3e4ce] p-3'>
                Frontend development fundamentals
              </li>
              <li className='rounded-lg border border-[#9e714b52] bg-[#f3e4ce] p-3'>
                Clean communication and team collaboration
              </li>
              <li className='rounded-lg border border-[#9e714b52] bg-[#f3e4ce] p-3'>
                Problem-solving under pressure
              </li>
              <li className='rounded-lg border border-[#9e714b52] bg-[#f3e4ce] p-3'>
                Continuous learning in software engineering
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='relative mx-auto max-w-[1170px] px-4 pb-24 sm:px-8 xl:px-0'>
        <div className='grid gap-6'>
          <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(150deg,#f6ead7_0%,#e7d1b3_100%)] p-8 shadow-[0_16px_28px_rgba(67,42,25,0.14)]'>
            <p className='mb-3 text-sm font-semibold tracking-[0.24em] text-[#8b5f3e] uppercase'>
              About Me
            </p>
            <h2 className='max-w-xl text-3xl font-semibold tracking-tight text-[#4b3020] sm:text-4xl'>
              Hi, my name is Julissa. Nice to meet you.
            </h2>
            <p className='mt-5 max-w-2xl text-base leading-relaxed text-[#6d4e38] sm:text-lg'>
              I am from California originally and after high school i joined the military, where I worked in signal support,learned how to troubleshoot equipment, and developed strong prolbem solving skills. Now out of the military I am pursuing a career in software development and am eager to learn more and grow my skills in this field.
            </p>
          </div>
        </div>
      </section>

      <section className='relative mx-auto max-w-[1170px] px-4 pb-24 sm:px-8 xl:px-0'>
        <div className='mb-10 max-w-3xl'>
          <h2 className='text-3xl font-semibold tracking-tight text-[#4b3020] sm:text-4xl'>
            Projects I&apos;ve Worked On
          </h2>
          <p className='mt-4 text-base leading-relaxed text-[#6d4e38] sm:text-lg'>
            A few examples of projects where I applied my frontend and
            troubleshooting skills to build reliable user-focused experiences.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <article className='rounded-2xl border border-[#8e613f4f] bg-[linear-gradient(150deg,#f6ead7_0%,#e7d1b3_100%)] p-6 shadow-[0_16px_24px_rgba(67,42,25,0.14)]'>
            <h3 className='text-lg font-semibold text-[#4b3020]'>
              Portfolio Website
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[#6a4a34]'>
              Designed and built a personal portfolio using Next.js and Tailwind
              CSS with dedicated pages for skills, experience, education, and
              contact information.
            </p>
          </article>

          <article className='rounded-2xl border border-[#8e613f4f] bg-[linear-gradient(150deg,#f6ead7_0%,#e7d1b3_100%)] p-6 shadow-[0_16px_24px_rgba(67,42,25,0.14)]'>
            <h3 className='text-lg font-semibold text-[#4b3020]'>
              The Beans website
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[#6a4a34]'>
              Built small interactive applications to strengthen JavaScript
              fundamentals, including DOM updates, form handling, and responsive
              UI behavior.
            </p>
          </article>

          <article className='rounded-2xl border border-[#8e613f4f] bg-[linear-gradient(150deg,#f6ead7_0%,#e7d1b3_100%)] p-6 shadow-[0_16px_24px_rgba(67,42,25,0.14)]'>
            <h3 className='text-lg font-semibold text-[#4b3020]'>
              Communication Support Workflows
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-[#6a4a34]'>
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
