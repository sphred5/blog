import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header.js";
import classes from "./post-content.module.css";

const PostContent = (props) => {
  const { post } = props;
  const imaagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imaagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
