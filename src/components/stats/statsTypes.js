import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

import StatsItem from './statsItem';

class StatsTypes extends Component {
	componentDidMount() {
		this.props.fetchStats();
		setInterval(this.props.fetchStats, 1000);
	}

	render() {
		return (
			<div className='stats-types'>
				<div className='stats-types__title'>Data Types</div>
				<div className='stats-types__items'>
					{
						Object.values(this.props.stats).map(stat => {
							return <StatsItem key={stat.id} title={stat.title} id={stat.id} />
						})
					}
					<div className = 'stats-types__empty'></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { stats } = state.stats
	return {
		stats
	}
}

export default connect(mapStateToProps, actions)(StatsTypes);