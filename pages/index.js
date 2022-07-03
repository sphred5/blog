import Hero from "../components/home-page/hero.js";
import FeaturedPosts from "../components/home-page/featured-posts.js";

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started",
      image: "getting-started-with-nextjs.png",
      excerpt: "this is the exerpt",
      date: "2022-10-03",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started",
      image: "getting-started-with-nextjs.png",
      excerpt: "this is the exerpt",
      date: "2022-10-03",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started",
      image: "getting-started-with-nextjs.png",
      excerpt: "this is the exerpt",
      date: "2022-10-03",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started",
      image: "getting-started-with-nextjs.png",
      excerpt: "this is the exerpt",
      date: "2022-10-03",
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
