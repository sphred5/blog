import Head from "next/head";
import AllPosts from "../../components/posts/all-posts.js";
import { getAllPosts } from "../../lib/post-util.js";

const AllPostsPage = (props) => {
  return (
    <>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="all posts about programming"/>
    </Head>
    <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
