import {useState} from 'react';
import './home.css'

const Home = () => {
  let Yellow = 'yellow';
  const [bgcolor, setBgColor] = useState(Yellow);
  const [count, setcount] = useState(0);
  const [col, setcol] = useState("Yellow");
  const [data, setdata] = useState([]);
  const [count2, setcount2] = useState(0);

  const changeColor = () =>
  {
    let pink = 'pink';
    setBgColor(pink);
    setcount(count + 1);
    setcol("Pink");
  };

  const change = () =>
  {
    setdata([...data, []])
    setcount2(count2 + 1);
  }

 
  return (
    <>
    <div className="main">
        <div className="circle" style={{background: bgcolor}}>
            <p className='Counter'>{count}</p>
            <p className='colour'>{col}</p>
        </div>
        <br />
        <button className='bt1' onClick={changeColor}>BUtton 1</button>
        <button className='bt2' onClick={change} >BUtton 2</button>
        {
          data.map((val,i) =>
          <div className="circle" style={{background: bgcolor, float: 'right'}}>
            <p className='Counter'>{count}</p>
            <p className='colour'>{col}</p>
          </div>
          )
        }
    </div>
    </>
  )
}

export default Home
