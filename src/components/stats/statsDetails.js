import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

class StatsDetails extends Component {
	componentDidMount() {
		setInterval(this.props.swapDescription, 3000);
	}

	render() {
		const { title, data, description } = (this.props.stat !== undefined ? this.props.stat : this.props.focused)
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
	const focused = state.stats.focused;
	return {
		focused
	}
}

export default connect(mapStateToProps, actions)(StatsDetails);