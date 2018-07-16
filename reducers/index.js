import { combineReducers } from 'redux';

import events from './Events.js';
import gameState from './GameState.js';


export default combineReducers ({
	events,
	gameState
});
