// src/App.js

import Header from './Header/Header.jsx';
import React from 'react';
import Map from "./MapView/MapView.jsx";
import ReviewForm from './AddingComment/AddingComment.jsx';


function App() {
  return (<div className='OuterBox'>
    <Header className="head" />
    <Map className="MapContainer" />
    <ReviewForm className="ReviewArea " />
  </div>
  );
}

export default App;
