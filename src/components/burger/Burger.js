import { useState, useEffect, useRef } from 'react';
import './Burger.scss';

import dropDown from '../../assets/images/Burger.svg';

const Burger = ({ className, children }) => {

  const [expanded, setExpand] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      setExpand(false);
    };

    document.addEventListener('mousedown', listener, { passive: false });
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  let cls = 'burger-btn';
  if (className)
    cls += ` ${className}`;

  return (
    <>
      <a className={cls} href="#" onClick={e => {
        e.preventDefault();
        setExpand(true);
      }}
      ><img src={dropDown} />
      </a>
      {
        expanded && (
          <div className='burger__slide' ref={ref}>
            {children}
          </div>
        )
      }
    </>
  );
}

export default Burger;