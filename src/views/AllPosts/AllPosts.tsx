import { useEffect } from 'react';
import classes from './AllPosts.module.css';
import Select from '../../components/Select/Select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchData, selectNews } from '../../features/news/newsSlice';
import PostsGrid from '../../components/PostsGrid/PostsGrid';

const defaultParams = {
  query: 'angular',
  page: 0,
};

const AllPosts = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(fetchData(defaultParams));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Select />
      <div className={classes.content}>{news && <PostsGrid data={news} />}</div>
    </div>
  );
};

export default AllPosts;
