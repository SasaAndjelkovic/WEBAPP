import { useState} from 'react';

import './Star.css';

const Star = (props) => {

    const [counter, setCounter] = useState (0);
    const [selected, setSelected] = useState (false);

    const onSelect = () => {
        setCounter(counter + 1)
        setSelected(!selected)
    }

    const cName = (selected) ? 'wrapper selected' : 'wrapper';

    return (
        <div className = {cName} onClick = {onSelect}>
            <p className = 'counter'>{counter}</p>
        </div>
    )

}

export default Star;