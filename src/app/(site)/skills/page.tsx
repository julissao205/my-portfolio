import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Julissa Orsborn',
  description: 'Technical skills and strengths of Julissa Orsborn.',
};

export default function SkillsPage() {
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'Web Development Fundamentals',
    'Troubleshooting',
    'Functional Programming Basics',
    'Maintenance Documentation',
    'Problem Solving',
    'Critical Thinking',
    'Team Collaboration',
  ];

  return (
    <main className='relative overflow-hidden text-[#5b3f2b]'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#bf8e6033] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#a4774d2e] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[1170px] px-4 pt-10 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-[#482f20] sm:text-5xl'>
          Skills & Strengths
        </h1>

        <p className='mb-10 max-w-2xl text-base leading-relaxed text-[#6d4e38] sm:text-lg'>
          A focused set of foundational development and problem-solving skills I
          continue to grow through hands-on practice and real-world experience.
        </p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill) => (
            <div
              key={skill}
              className='rounded-2xl border border-[#8e613f4f] bg-[linear-gradient(150deg,#f6ead7_0%,#e7d1b3_100%)] p-5 text-[#5f422f] shadow-[0_16px_24px_rgba(67,42,25,0.14)] transition duration-300 hover:-translate-y-1 hover:border-[#a3764d]'
            >
              <p className='text-sm font-medium'>{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
