import axios from 'axios';

import { SET_STATS, SWAP_DESCRIPTION} from './types'

export function fetchStats() {
	return async function (dispatch, getState) {
		const url = process.env.NODE_ENV === 'development' ? 'https://gist.githubusercontent.com/seanrcollings/9daf5412ec94de9a19362579d35eeea3/raw/f11b69bbf25d3305f22189ddac5d215c4be06b13/data.json' : '/data.json';
		const response = await axios.get(url);
		dispatch({
			type: SET_STATS,
			payload: response.data,
		})
	}
}

export function swapDescription(id) {
	return {
		type: SWAP_DESCRIPTION,
		payload: id
	}
}
