import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Julissa Orsborn',
  description:
    'Contact Julissa Orsborn for software development opportunities.',
};

export default function ContactPage() {
  return (
    <main className='relative overflow-hidden bg-[#89706f] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#e88b6840] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#d28b7138] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[900px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl'>
          Let&apos;s Connect
        </h1>

        <p className='mb-10 max-w-2xl text-base leading-relaxed text-[#f2e8e5] sm:text-lg'>
          I am actively looking for software development opportunities and would
          love to connect with recruiters, hiring managers, and engineering
          teams.
        </p>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='rounded-3xl border border-[#c08b7980] bg-[#9f858099] p-6 shadow-2xl backdrop-blur'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#ffe1d6]'>
              Email
            </p>
            <p className='mb-5 text-lg text-[#fff4ef]'>
              julissaorsborn@gmail.com
            </p>
            <a
              href='mailto:julissaorsborn@gmail.com'
              className='inline-flex rounded-xl bg-[#e88b68] px-5 py-2.5 text-sm font-semibold text-[#5a3027] transition hover:bg-[#c08b79]'
            >
              Send Email
            </a>
          </div>

          <div className='rounded-3xl border border-[#c08b7980] bg-[#9f858099] p-6 shadow-2xl backdrop-blur'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#ffd5c6]'>
              Phone
            </p>
            <p className='mb-5 text-lg text-[#fff4ef]'>785-323-0878</p>
            <a
              href='tel:7853230878'
              className='inline-flex rounded-xl border border-[#e88b68] px-5 py-2.5 text-sm font-semibold text-[#fff4ef] transition hover:border-[#c08b79] hover:text-[#ffd5c6]'
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
