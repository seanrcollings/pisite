import axios from 'axios';

import { SET_STATS, SWAP_DESCRIPTION} from './types'

export function fetchStats() {
	return async function (dispatch, getState) {
		const url = '/data.json';
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
