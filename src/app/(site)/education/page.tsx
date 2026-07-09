import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Julissa Orsborn',
  description: 'Education and certification background for Julissa Orsborn.',
};

export default function EducationPage() {
  return (
    <main className='relative overflow-hidden text-[#5b3f2b]'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#bf8e6033] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#a4774d2e] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[1170px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-8 text-4xl leading-tight font-semibold tracking-tight text-[#482f20] sm:text-5xl'>
          Academic Background
        </h1>

        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(145deg,#f6e8d4_0%,#e8d2b6_100%)] p-7 shadow-[0_16px_28px_rgba(64,39,22,0.18)]'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#7f5536]'>
              Education
            </p>
            <h2 className='mb-4 text-2xl font-semibold text-[#4b3020]'>
              Herbert Hoover High School
            </h2>
            <p className='text-sm text-[#6d4e38]'>
              San Diego, CA | High School Diploma | 05/2023
            </p>
          </div>

          <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(145deg,#f6e8d4_0%,#e8d2b6_100%)] p-7 shadow-[0_16px_28px_rgba(64,39,22,0.18)]'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#7f5536]'>
              Certifications
            </p>
            <h2 className='mb-4 text-2xl font-semibold text-[#4b3020]'>
              Coding Certifications
            </h2>
            <ul className='space-y-2 text-sm text-[#6d4e38]'>
              <li>HTML/CSS Certification</li>
              <li>JavaScript Certification</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
