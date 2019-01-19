import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

class StatsDetails extends Component {

	render() {
		const {title, data, description} = (this.props.widgetStat !== undefined ? this.props.widgetStat : this.props.stat);
		return (
			<div className='stat-details'>
				<div className='stat-details__title'>{title}</div>
				<div className='stat-details__data'>{data}</div>
				<div className='stat-details__description'>{description}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	let stat;
	if(state.stats.focused === 'default'){
		stat = {
			title: 'Select a Data Type',
			data: 'None Selected',
			description: "",
			id: 0
		}
	} else {
		stat = state.stats.stats[state.stats.focused];
	}
	return {
		stat
	}
}

export default connect(mapStateToProps, actions)(StatsDetails);