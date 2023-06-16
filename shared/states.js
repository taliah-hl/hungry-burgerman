import { createGlobalState } from 'react-hooks-global-state';

//egg status: 0: none, 1: hatching, 2: hatched
const {setGlobalState, useGlobalState} = createGlobalState({
    eggStatus: 1,
});

export {setGlobalState, useGlobalState};