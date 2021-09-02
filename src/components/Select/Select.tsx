import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFilter, setFilter } from '../../features/news/newsSlice';
import classes from './Select.module.css';

interface SelectOption {
  name: string;
  img: any;
}

const options = [
  {
    name: 'angular',
    img: require('../../img/angular.png'),
  },
  {
    name: 'react',
    img: require('../../img/react.png'),
  },
  {
    name: 'vue',
    img: require('../../img/vue.png'),
  },
];

const Select = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  useEffect(() => {
    setIsOpen(false);
  }, [filter]);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: SelectOption) => {
    dispatch(setFilter(option));
  };

  return (
    <div className={classes.container} ref={ref}>
      <button onClick={handleClick} className={classes.button}>
        {filter && filter.img ? (
          <>
            <span className={classes['button-image']}>
              <img src={filter.img.default} alt={filter.name} />
            </span>
            <span>{filter.name}</span>
          </>
        ) : (
          <span>Select your news</span>
        )}
      </button>
      {open && (
        <div className={classes.submenu}>
          {options.map((option) => (
            <button
              onClick={() => handleOptionClick(option)}
              key={option.name}
              className={classes.option}
            >
              <span className={classes['option-images']}>
                <img src={option.img.default} alt={option.name} />
              </span>
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
