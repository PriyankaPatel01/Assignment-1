import { useNavigate } from 'react-router-dom';
import './error.css';
import { useState } from 'react';

const Error = () => {
    const nav = useNavigate();
    const [go, setgo]=useState(false);

    if(go)
    {
      nav('/');
    };

  return (
    <div className='OOPS'>
      <h1>Oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3><br />
      <h5>The page you are looking for may have been removed, name changed or deleted temporarily.</h5>
      <br /><br /><br />
      <button onClick={() => {setgo(true)}} className='btn'>Home Page</button>
    </div>
  )
}

export default Error
