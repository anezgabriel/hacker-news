import { useAppSelector } from '../../app/hooks';
import PostsGrid from '../../components/PostsGrid/PostsGrid';
import { selectFavorites } from '../../features/persisted/persistedSlice';
import classes from './MyFaves.module.css';

const MyFaves: React.FC = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <div className={classes.container}>
      {favorites && favorites.length === 0 && (
        <div className={classes.message}>
          <h1>You have no favorites :(</h1>
        </div>
      )}
      {favorites && favorites.length > 0 && <PostsGrid data={favorites} />}
    </div>
  );
};

export default MyFaves;
