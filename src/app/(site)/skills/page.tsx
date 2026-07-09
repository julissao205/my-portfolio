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
    <main className='relative overflow-hidden bg-[#89706f] text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute top-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#e88b6840] blur-[100px]' />
        <div className='absolute bottom-[-160px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#d28b7138] blur-[120px]' />
      </div>

      <section className='relative mx-auto max-w-[1170px] px-4 pt-36 pb-24 sm:px-8 xl:px-0'>
        <h1 className='mb-6 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl'>
          Skills & Strengths
        </h1>

        <p className='mb-10 max-w-2xl text-base leading-relaxed text-[#f2e8e5] sm:text-lg'>
          A focused set of foundational development and problem-solving skills I
          continue to grow through hands-on practice and real-world experience.
        </p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill) => (
            <div
              key={skill}
              className='rounded-2xl border border-[#c08b7985] bg-[#9f858099] p-5 text-[#f7efec] transition duration-300 hover:-translate-y-1 hover:border-[#e88b68]'
            >
              <p className='text-sm font-medium'>{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
