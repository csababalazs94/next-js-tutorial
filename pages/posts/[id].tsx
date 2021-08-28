import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              <Date dateString={postData.date} />
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {postData.title}
            </h1>
            <p className="flex text-left lg:w-2/3 mx-auto leading-relaxed text-base">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </p>
            <div className="flex text-left lg:w-2/3 mx-auto mt-4 ">
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
