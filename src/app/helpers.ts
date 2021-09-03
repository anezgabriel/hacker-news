import { Post } from '../app/types';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export const filterPosts = (posts: any) => {
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

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export const formatDate = (date: Date) => {
  return timeAgo.format(date);
};
