import { useEffect, useCallback } from 'react';
import classes from './AllPosts.module.css';
import Select from '../../components/Select/Select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchData,
  increasePage,
  selectLoading,
  selectNews,
  selectPage,
} from '../../features/news/newsSlice';
import PostsGrid from '../../components/PostsGrid/PostsGrid';
import { selectFilter } from '../../features/persisted/persistedSlice';
import Loader from '../../components/Loader/Loader';

const AllPosts = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const news = useAppSelector(selectNews);
  const filter = useAppSelector(selectFilter);
  const page = useAppSelector(selectPage);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    dispatch(increasePage());
  }, [dispatch]);

  useEffect(() => {
    if (filter && filter.name) {
      const params = { query: filter.name, page };
      dispatch(fetchData(params));
    }
  }, [page, filter, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={classes.container}>
      <Select />
      <div className={classes.content}>
        {!loading && !filter.name && news.length === 0 && (
          <div className={classes.message}>
            <h1>Select your news</h1>
          </div>
        )}
        {filter && news && <PostsGrid data={news} />}

        {loading && <Loader />}
        {!loading && filter && filter.name && (
          <div className={classes.scroll}>
            <h1>Scroll down to load more</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
