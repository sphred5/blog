import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header.js";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started",
  image: "getting-started-with-nextjs.png",
  content: "# This is a first post",
  date: "2022-10-03",
};

const PostContent = () => {
  const imaagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imaagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
