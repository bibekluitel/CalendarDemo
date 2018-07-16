import EventsUI from 'Components/Event';
import {connect} from 'react-redux';
import * as utilFuntions from './utils/Util.js';
import * as actions from './../actions/Action.js';
const mapStateToProps = (state, ownProps) => {
		let eventToDisplay = [];
		if(ownProps.eventType ==="edit") {
			 eventToDisplay = state.events.find( (indEvent) => {
				 return indEvent.id === ownProps.eventId;
			});
		}
	return {
		...state,
		...utilFuntions,
		...eventToDisplay,
		eventToDisplay: eventToDisplay
	};
};


export default connect( mapStateToProps, {...actions})(EventsUI);
