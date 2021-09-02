import ToggleButton from '../ToggleButton/ToggleButton';
import classes from './Toggle.module.css';

const Toggle: React.FC = () => {
  return (
    <div className={classes.container}>
      <ToggleButton text="All" />
      <ToggleButton text="My faves" />
    </div>
  );
};

export default Toggle;
