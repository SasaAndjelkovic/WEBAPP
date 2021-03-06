import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

const App = () => {
    //Setovanje
    //Lamp one state
  const [isLampOneOn, setIsLampOneOn] = useState (false);
    //Lamp two state
  const [isLampTwoOn, setIsLampTwoOn] = useState (true);

    //Hendlerin
  const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
  const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

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
        callback={handleLightSwitchTwo}
        switchOn={isLampTwoOn}
        position='right'
      />
    </Room>
  );
}

export default App;
