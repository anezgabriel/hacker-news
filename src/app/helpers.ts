import { Post } from '../app/types';

export const filterPosts = (posts: any) => {
  console.log('posts', posts);
  const filteredPosts = posts.filter((post: Post) => {
    if (post.author && post.created_at && post.story_title && post.story_url) {
      return true;
    }
    return false;
  });

  if (filteredPosts.length > 8) {
    return filteredPosts.slice(0, 8);
  }

  return filteredPosts;
};
