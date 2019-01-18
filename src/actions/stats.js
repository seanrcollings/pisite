import axios from 'axios';

import { SET_STATS, SWAP_DESCRIPTION} from './types'

export function fetchStats() {
	return async function (dispatch, getState) {
		const url = process.env.NODE_ENV === 'development' ? 'https://gist.githubusercontent.com/seanrcollings/9daf5412ec94de9a19362579d35eeea3/raw/43498171a7c373fac7358b8929ab6441de5c6d0c/data.json' : '/data.json';
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
