import{ FETCH_STATS, SWAP_DESCRIPTION } from './types'

const stats = [
    {
        title: 'Current Time',
        data: '20:32:01',
        description: "You're dumb if you don't know what current time means",
        id: 0
    },
    {
        title: 'Users',
        data: '2 Users',
        description: "Stat probably won't ever change",
        id: 1
    },
    {
        title: 'Uptime',
        data: '34 Minutes',
        description: "How long since last restart",
        id: 2
    },
]

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


