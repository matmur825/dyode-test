import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import './Accordion.scss';

const Accordion = ({ title, children, className }) => {

  const [expanded, setExpand] = useState(false);

  let cls = 'accordion';

  if (className)
    cls += ` ${className}`;

  return (
    <div className={cls}>
      <div className='accordion__header pacifico regular' onClick={() => setExpand(!expanded)}>
        <span>{title}</span>
        {expanded ? <FaMinus /> : <FaPlus />}
      </div>
      {
        expanded && <div className='accordion__content'>{children}</div>
      }
    </div>
  );
}

export default Accordion;