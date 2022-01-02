import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ChangeColor() {
    const dispatch = useDispatch();
    const colorValue = useRef();
    // const [color, setColor] = useState("");
    return (
        <div>
            {/* <input type="text" onChange={(event) => {
                setColor(event.target.value);
            }}/>

            <button onClick={(event) => {
                dispatch(changeColor(color));
            }
            }>Change Color</button> */}
            <input ref={colorValue} type="text" />
            <button onClick={(event) => { dispatch(changeColor(colorValue.current.value)); }}>Change Clolor</button>
        </div>
    );
}

export default ChangeColor;