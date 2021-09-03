import { useEffect } from 'react';
import classes from './AllPosts.module.css';
import Select from '../../components/Select/Select';
import { useAppDispatch } from '../../app/hooks';
import { fetchData } from '../../features/news/newsSlice';

const defaultParams = {
  query: '',
  page: 0,
};

const AllPosts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData(defaultParams));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Select />
      <div className={classes.content}>
        <div>All Posts</div>
      </div>
    </div>
  );
};

export default AllPosts;
