import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Julissa Orsborn',
  description:
    'Contact Julissa Orsborn for software development opportunities.',
};

export default function ContactPage() {
  return (
    <main className='relative overflow-hidden bg-[#0b101a] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#14b8a633] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#f9731633] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[900px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl'>
          Let&apos;s Connect
        </h1>

        <p className='mb-10 max-w-2xl text-base leading-relaxed text-[#cbd5e1] sm:text-lg'>
          I am actively looking for software development opportunities and would
          love to connect with recruiters, hiring managers, and engineering
          teams.
        </p>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='rounded-3xl border border-[#1e293b] bg-[#111827cc] p-6 shadow-2xl backdrop-blur'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#5eead4]'>
              Email
            </p>
            <p className='mb-5 text-lg text-[#e2e8f0]'>
              julissaorsborn@gmail.com
            </p>
            <a
              href='mailto:julissaorsborn@gmail.com'
              className='inline-flex rounded-xl bg-[#14b8a6] px-5 py-2.5 text-sm font-semibold text-[#082f2d] transition hover:bg-[#2dd4bf]'
            >
              Send Email
            </a>
          </div>

          <div className='rounded-3xl border border-[#1e293b] bg-[#111827cc] p-6 shadow-2xl backdrop-blur'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#fdba74]'>
              Phone
            </p>
            <p className='mb-5 text-lg text-[#e2e8f0]'>785-323-0878</p>
            <a
              href='tel:7853230878'
              className='inline-flex rounded-xl border border-[#94a3b8] px-5 py-2.5 text-sm font-semibold text-[#e2e8f0] transition hover:border-[#f97316] hover:text-[#fdba74]'
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
