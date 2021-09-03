import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.loader}>
      <h1>Fetching News...</h1>
      <div className={classes.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
