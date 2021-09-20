import React, { useState } from 'react';
import './app.css';
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const App = () => {
    //Setovanje
    //Lamp one state
  const [isLampOneOn, setIsLampOneOn] = useState(false);
    //Lamp two state
  const [isLampTwoOn, setIsLampTwoOn] = useState (true);

    //Hendleri
  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwithTwo = () => setIsLampTwoOn(prev => !prev);

    //Renderovanje DOMa
  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position='left' />   {/* lampOn is prop, object; position is prop */}
      <Lamp lampOn={isLampTwoOn} positon='right' />
      <LightSwitch 
        name='one'
        callback={handleLightSwitchOne}
        switchOn={isLampOneOn}
        position='left'
      />
      <LightSwitch
        name='two'
        callback={handleLightSwithTwo}
        switchOn={isLampTwoOn}
        position='right'
      />
    </Room>
  );
}

export default App;
