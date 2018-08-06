import { combineReducers } from 'redux';

import stats from './statsReducer';

const rootreducer = combineReducers({
	stats
})

export default rootreducer;