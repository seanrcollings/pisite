import { FETCH_STATS, SWAP_DESCRIPTION } from '../actions/types';

const INITIAL_STATE = {
    stats: [],
    focused: {
        title: 'Current Time',
        data: '20:32:01',
        description: "You're dumb if you don't know what current time means",
        id: 0
    }
}


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_STATS:
            return {
                ...state,
                stats: action.payload
            }

        case SWAP_DESCRIPTION:
            const focusedId = action.payload;
            let focused = null;
            state.stats.forEach(stat => {
                if(stat.id === focusedId) {
                    focused = stat;
                }
            })
            return {
                ...state,
                focused
            }
        default:
            return state
    }
}