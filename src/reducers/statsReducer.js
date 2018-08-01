import { FETCH_STATS } from '../actions/types';

const INITIAL_STATE = {
    stats: []
}


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_STATS :
            return {
                ...state,
                stats: action.payload
            }
        default:
            return state
    }
}