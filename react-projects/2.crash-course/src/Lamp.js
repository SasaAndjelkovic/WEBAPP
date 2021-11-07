import React from "react";
import './lamp.css';

const Wrapper =`
    left: ${props => (props.positon === 'left' ? '20px' : '380px')};
    background: ${props => (props.lampOn ? 'orange' : 'lightgrey')};
    `

const Lamp = ({ lampOn, position }) => (   //moglo je da se stavi props
    <Wraper lampOn={lampOn} position={position}>    {/* props.lampOn i props.position */}
        <div />
    </Wraper>
)

export default Lamp;