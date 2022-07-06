import Head from "next/head";
import Hero from "../components/home-page/hero.js";
import FeaturedPosts from "../components/home-page/featured-posts.js";
import { getFeaturedPosts } from "../lib/post-util.js";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
