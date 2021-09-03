import classes from './AllPosts.module.css';
import Select from '../../components/Select/Select';
import { useAppSelector } from '../../app/hooks';
import { selectLoading, selectNews } from '../../features/news/newsSlice';
import PostsGrid from '../../components/PostsGrid/PostsGrid';
import { selectFilter } from '../../features/persisted/persistedSlice';
import Loader from '../../components/Loader/Loader';

const AllPosts = () => {
  const loading = useAppSelector(selectLoading);
  const news = useAppSelector(selectNews);
  const filter = useAppSelector(selectFilter);

  return (
    <div className={classes.container}>
      <Select />
      <div className={classes.content}>
        {loading && <Loader />}
        {!loading && !filter.name && news.length === 0 && (
          <div className={classes.message}>
            <h1>Select your news</h1>
          </div>
        )}
        {!loading && filter && news && <PostsGrid data={news} />}
      </div>
    </div>
  );
};

export default AllPosts;
