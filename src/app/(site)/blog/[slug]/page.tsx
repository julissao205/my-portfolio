import Breadcrumb from '@/components/Breadcrumb';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  return {
    title: `${params.slug} | Blog`,
    description: 'Blog integration is currently disabled',
  };
}

export default async function BlogDetails(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle='Blog Details' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto w-full max-w-[1170px] rounded-lg border border-white/[0.12] bg-white/[0.04] p-6'>
          Blog post <span className='font-semibold'>{slug}</span> is unavailable
          because blog integration is disabled.
        </div>
      </section>
    </>
  );
}
