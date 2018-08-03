import{ FETCH_STATS, SWAP_DESCRIPTION } from './types'

import stats from '../data' 

export function fetchStats() {

    return {
        type: FETCH_STATS,
        payload: stats.map(stat => {
                return stat
        })
    }
}

export function swapDescription(id) {
    return {
        type: SWAP_DESCRIPTION,
        payload: id
    }
}


