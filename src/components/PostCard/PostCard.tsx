import React from 'react';
import { Post } from '../../app/types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      <p>{post.author}</p>
      <p>{post.created_at}</p>
      <p>{post.story_title}</p>
      <p>{post.story_url}</p>
      <hr />
    </div>
  );
};

export default PostCard;
