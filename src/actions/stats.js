import{ FETCH_STATS } from './types'

export function fetchStats(title) {
    const stats = [
        {
            title: 'Current Time',
            data: '20:32:01',
            description: "You're dumb if you don't know what current time means"
        },
        {
            title: 'Users',
            data: '2 Users',
            description: "You're dumb if you don't know what current time means"
        },
        {
            title: 'Uptime',
            data: '20:32:01',
            description: "You're dumb if you don't know what current time means"
        },
    ]

    return {
        type: FETCH_STATS,
        payload: stats.map(stat => {
                return stat
        })
    }
}


