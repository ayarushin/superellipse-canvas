import React, { Fragment, useState } from 'react';
import './App.scss';
import Superellipse from '../Superellipse/Superellipse';
import Controls from '../Controls/Controls';

function App() {
  const [ degree, setDegree ] = useState(4);
  const [ color, setColor ] = useState('#e74c3c');

  return <div className="container-fluid">
    <Fragment>
      <Superellipse degree={degree} color={color}/>
      <Controls range={degree} color={color} onChangeRange={setDegree} onChangeColor={setColor}/>
    </Fragment>
  </div>;
}

export default App;
