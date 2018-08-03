import { FETCH_STATS, SWAP_DESCRIPTION } from '../actions/types';

const INITIAL_STATE = {
    stats: [],
    focused: {
        title: 'Select a Data Type',
        data: 'None Selected',
        description: "",
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