import React from "react";
import './lightSwitch.css';

const Button =`left: ${props => (props.position === 'left' ? '20px' : '380px')}`;

const LightSwitch = ({ callback, position, switchOn }) => (
    <Button onCLick={callback} position={position}>
        {switchOn ? 'On' : 'Off'}
    </Button>
);

export default LightSwitch;