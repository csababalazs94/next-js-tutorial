import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import d from '../public/images/d.png';
import { Parallax } from 'react-scroll-parallax';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <>
      <Head>
        <title>Reka Blog</title>
      </Head>
      <Layout>
        <Parallax className="flex" y={[-20, 20]} tagOuter="figure">
          <Image src={d} height={600} />
        </Parallax>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-200">
              {allPostsData.map(({ id, date, title }) => (
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      Blog Post
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      <Date dateString={date} />
                    </span>
                  </div>

                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {title}
                    </h2>
                    <p className="leading-relaxed">Preview.</p>
                    <Link href={`/posts/${id}`}>
                      <a className="text-indigo-500 inline-flex items-center mt-4">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {/* <path d="M5 12h14"></path>
                           <path d="M12 5l7 7-7 7"></path> */}
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
