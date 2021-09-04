import { useEffect, useState, useCallback } from 'react';
import { paginateFavorites } from '../../app/helpers';
import { useAppSelector } from '../../app/hooks';
import { Post } from '../../app/types';
import PostsGrid from '../../components/PostsGrid/PostsGrid';
import { selectFavorites } from '../../features/persisted/persistedSlice';
import classes from './MyFaves.module.css';

const MyFaves: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const favorites = useAppSelector(selectFavorites);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (favorites.length === data.length) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  }, [data, favorites]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (favorites) {
      setData((prevData) => [
        ...prevData,
        ...paginateFavorites(favorites, page),
      ]);
    }
  }, [favorites, page]);

  return (
    <div className={classes.container}>
      {favorites && favorites.length === 0 && (
        <div className={classes.message}>
          <h1>You have no favorites :(</h1>
        </div>
      )}
      {data && data.length > 0 && <PostsGrid data={data} />}
      {data && favorites && favorites.length !== data.length && (
        <div className={classes.scroll}>
          <h1>Scroll Down to load more</h1>
        </div>
      )}
    </div>
  );
};

export default MyFaves;
