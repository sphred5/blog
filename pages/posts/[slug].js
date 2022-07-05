import PostConent from "../../components/post-detail/post-content.js";
import { getPostData } from "../../lib/post-util.js";

const PostDetailPage = () => {
  return <PostConent />;
};
export function getStaticProps(context) {
  const { params } = context;
  return {
    props: {
      post: getPostData(params.slug),
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
export default PostDetailPage;
