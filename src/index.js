//import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';
import React, { useState, useEffect } from 'react';
import mystyle from './mystyle.module.css'; 

const Example = (props) => {
  const [count, setCount] = useState(0);
  const [propsCount, setPropsCount] = useState(props.count);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Props Count ${propsCount}`;
  });


  return (
    <div>
      <p>You clicked {count} times</p>
      <button className={mystyle.bigblue} onClick={() => {
        setCount(count + 1)
        setPropsCount(propsCount + 1)
      }}>
        Click me
      </button>
    </div>
  );
}


ReactDOM.render(<Example count={10} />, document.getElementById('root'));
