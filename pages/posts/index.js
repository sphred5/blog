import Head from "next/head";
import AllPosts from "../../components/posts/all-posts.js";
// import { getAllPosts } from "../../lib/post-util.js";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="all posts about programming" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query Posts {
      posts {
        id
        title
        publishedAt
        content {
          document
        }
      }
    }`
  });

  return {
    props: {
      posts: data.posts
    }
  }
  // const allPosts = getAllPosts();
  // return {
  //   props: {
  //     posts: allPosts,
  //   },
  // };


}
export default AllPostsPage;
