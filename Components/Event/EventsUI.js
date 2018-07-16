import React , { Component } from 'react';
import PropTypes from 'prop-types';
import AddEvent from './addEvent';
import './events.scss';

class EventsUI extends Component {
	showErrorMesage= (message) => (
		<div className="error-container">
			{message}
		</div>
	)

	render () {
		const{eventType, gameState} =this.props;
		return (
			<div className = "event-container" onClick= {this.props.closeDialog}>
				<div className="event-content-holder">
					{gameState.isError? this.showErrorMesage(gameState.message) : null}
					 <AddEvent  {...this.props}/>
				</div>
			</div>
		);
	}
}

EventsUI.propTypes = {
	eventType: PropTypes.string,
	gameState: PropTypes.object
};

EventsUI.defaultProps = {
	eventType: 'add',
	gameState: {}
};

export default EventsUI;
