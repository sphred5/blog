import Head from "next/head";
import PostConent from "../../components/post-detail/post-content.js";
import { getPostData, getPostFiles } from "../../lib/post-util.js";

const PostDetailPage = (props) => {
  return (
    <>
    <Head>
      <title>{props.post.title}</title>
      <meta name="description" content={props.post.excerpt} />
    </Head>
    <PostConent post={props.post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;
  const post = getPostData(slug);
  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((postFile) => postFile.replace(/\.md$/, ""));
  console.log(slugs);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;
