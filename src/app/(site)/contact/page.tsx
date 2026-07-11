import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Julissa Orsborn',
  description:
    'Contact Julissa Orsborn for software development opportunities.',
};

export default function ContactPage() {
  return (
    <main className='relative overflow-hidden text-[#5b3f2b]'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#bf8e6033] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#a4774d2e] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[900px] px-4 pt-10 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-[#482f20] sm:text-5xl'>
          Let&apos;s Connect
        </h1>

        <p className='mb-10 max-w-2xl text-base leading-relaxed text-[#6d4e38] sm:text-lg'>
          I am actively looking for software development opportunities and would
          love to connect with recruiters, hiring managers, and engineering
          teams.
        </p>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(145deg,#f6e8d4_0%,#e8d2b6_100%)] p-6 shadow-[0_16px_28px_rgba(64,39,22,0.18)]'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#7f5536]'>
              Email
            </p>
            <p className='mb-5 text-lg text-[#4b3020]'>
              julissaorsborn@gmail.com
            </p>
            <a
              href='mailto:julissaorsborn@gmail.com'
              className='inline-flex rounded-xl border border-[#d0a97c] bg-[linear-gradient(180deg,#f0cd9d_0%,#d9ac7a_100%)] px-5 py-2.5 text-sm font-semibold text-[#4b2f1f] shadow-[0_8px_18px_rgba(17,10,7,0.22)] transition hover:brightness-105'
            >
              Send Email
            </a>
          </div>

          <div className='rounded-3xl border border-[#8e613f4f] bg-[linear-gradient(145deg,#f6e8d4_0%,#e8d2b6_100%)] p-6 shadow-[0_16px_28px_rgba(64,39,22,0.18)]'>
            <p className='mb-2 text-sm font-medium tracking-wide text-[#7f5536]'>
              Write Me a Message
            </p>
            <p className='mb-5 text-lg text-[#4b3020]'>
              Send a quick note and I&apos;ll get back to you as soon as I can.
            </p>
            <a
              href='mailto:julissaorsborn@gmail.com?subject=Message%20from%20your%20portfolio'
              className='inline-flex rounded-xl border border-[#b6885f] bg-[#f7ebda] px-5 py-2.5 text-sm font-semibold text-[#5b3b28] transition hover:border-[#8f6542] hover:bg-[#f1e0c8]'
            >
              Write a Message
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
