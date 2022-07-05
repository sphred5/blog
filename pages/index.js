import Hero from "../components/home-page/hero.js";
import FeaturedPosts from "../components/home-page/featured-posts.js";
import { getFeaturedPosts } from "../lib/post-util.js";

const HomePage = (props) => {
  return (
    <>
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
