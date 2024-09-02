import React, {useState} from 'react'
import UseEffectCounterWithTimerHook from './UseEffectCounterWithTimerHook';

function UseEffectCounterWithTimerContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={ () => {
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {display && <UseEffectCounterWithTimerHook />}
        </div>
    )
}

export default UseEffectCounterWithTimerContainer
