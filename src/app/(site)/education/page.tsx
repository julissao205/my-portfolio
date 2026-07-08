import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Julissa Orsborn',
  description: 'Education and certification background for Julissa Orsborn.',
};

export default function EducationPage() {
  return (
    <main className='relative overflow-hidden bg-[#0b101a] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#14b8a633] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#f9731633] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[1170px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-8 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl'>
          Academic Background
        </h1>

        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='rounded-3xl border border-[#1e293b] bg-[#11182799] p-7'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#5eead4]'>
              Education
            </p>
            <h2 className='mb-4 text-2xl font-semibold text-white'>
              Herbert Hoover High School
            </h2>
            <p className='text-sm text-[#cbd5e1]'>
              San Diego, CA | High School Diploma | 05/2023
            </p>
          </div>

          <div className='rounded-3xl border border-[#1e293b] bg-[#11182799] p-7'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#fdba74]'>
              Certifications
            </p>
            <h2 className='mb-4 text-2xl font-semibold text-white'>
              Coding Certifications
            </h2>
            <ul className='space-y-2 text-sm text-[#cbd5e1]'>
              <li>HTML/CSS Certification</li>
              <li>JavaScript Certification</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
