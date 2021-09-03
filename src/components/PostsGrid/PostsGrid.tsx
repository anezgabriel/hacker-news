import React from 'react';
import { Post } from '../../app/types';
import PostCard from '../PostCard/PostCard';
import classes from './PostGrid.module.css';

interface PostsGridProps {
  data: Post[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      {data.map((post) => (
        <PostCard key={post.created_at} post={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
