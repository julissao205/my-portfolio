import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;

  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle={slug} />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <div className='rounded-lg border border-white/[0.12] bg-white/[0.04] p-6'>
            Author pages are unavailable because blog integration is disabled.
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
