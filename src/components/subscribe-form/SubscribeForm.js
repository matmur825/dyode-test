import { useState } from 'react';
import Button from '../squarebutton';

import './SubscribeForm.scss';

const SubscribeForm = () => {

  const [email, setEmail] = useState('');

  const submitHandler = () => {
    alert(email);
  }

  return (
    <div className='subscribe-form'>
      <input
        placeholder="Your Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button border onClick={submitHandler} className='pacifico regular'>Subscribe</Button>
    </div>
  );
}

export default SubscribeForm;