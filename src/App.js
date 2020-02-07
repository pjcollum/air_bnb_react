import React from 'react';

import './App.css';
import Home from './component/Home.js'
import Pic1 from './images/pic1.jpg';
import Pic2 from './images/pic2.jpg';
import Pic3 from './images/pic3.jpg';
import Man1 from './images/man1.jpg';
import Man2 from './images/man2.jpg';
import Man3 from './images/man3.jpg';



function App() {
  return (
    <div className='list'>

      <div className='oneList'>
        <Home source={Pic1} message="Gary had a great time" source1={Man1} message1="Gary, United States" />

      </div>

      <div className='secondList'>
        <Home source={Pic2} message="Very accommodating" source1={Man2} message1="Charlie, United Kingdom" />


      </div>
      <Home source={Pic3} message="Wow!!!!!!!!" source1={Man3} message1="Sarah, Wales" />


    </div>
  );
}

export default App;
