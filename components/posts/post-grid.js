import PostItem from "./post-item.js";
import classes from "./posts-grid.module.css";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <div className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostGrid;
