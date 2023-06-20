import { createGlobalState } from 'react-hooks-global-state';


const {setGlobalState, useGlobalState} = createGlobalState({
    eggStatus: 0,  //egg status: 0: none, 1: hatching, 2: hatched
    darkMode: 0,
    time: 1,
    countDownTime: 10,
    countDownTime_time: 0,
    eggCounter: 0,
});

export {setGlobalState, useGlobalState};