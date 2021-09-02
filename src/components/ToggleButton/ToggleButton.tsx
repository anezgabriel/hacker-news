import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeToggle, selectToggle } from '../../features/news/newsSlice';
import classes from './ToggleButton.module.css';

interface ToggleButtonProps {
  text: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ text }) => {
  const toggle = useAppSelector(selectToggle);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeToggle(text));
  };

  return (
    <button
      className={`${toggle === text ? classes.active : ''} ${classes.button}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
