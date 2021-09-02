import classes from './AllPosts.module.css';
import Select from '../../components/Select/Select';

const AllPosts = () => {
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
