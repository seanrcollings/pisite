import axios from 'axios';

import { SET_STATS, SWAP_DESCRIPTION} from './types'

export function fetchStats() {
	return async function (dispatch, getState) {
		const url = process.env.NODE_ENV === 'development' ? 'https://gist.githubusercontent.com/seanrcollings/9daf5412ec94de9a19362579d35eeea3/raw/607053197a6384a3e96cfa4cf92e13b1a8f72eb0/data.json' : '/data.json';
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
