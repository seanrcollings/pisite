import { SET_STATS, SWAP_DESCRIPTION } from '../actions/types';

const INITIAL_STATE = {
	stats: {},
	focused: 'default'
}


export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SWAP_DESCRIPTION:
			const focusedId = action.payload;
			let focused = state.focused;
			Object.values(state.stats).forEach(stat => {
				if (stat.id === focusedId) {
					focused = focusedId
				}
			})
			return {
				...state,
				focused
			}
		case SET_STATS:
			return { ...state, stats: action.payload };
		default:
			return state
	}
}