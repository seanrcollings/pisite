import { SET_STATS, SWAP_DESCRIPTION } from '../actions/types';

const INITIAL_STATE = {
	stats: [],
	focused: {
		title: 'Select a Data Type',
		data: 'None Selected',
		description: "",
		id: 0
	}
}


export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SWAP_DESCRIPTION:
			const focusedId = action.payload;
			let focused = state.focused;
			state.stats.forEach(stat => {
				if (stat.id === focusedId) {
					focused = stat;
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