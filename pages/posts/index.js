import AllPosts from "../../components/posts/all-posts.js";
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
const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
