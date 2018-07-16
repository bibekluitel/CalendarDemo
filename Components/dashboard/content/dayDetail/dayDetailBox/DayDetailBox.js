import React , { Component} from 'react';
import PropTypes from 'prop-types';
import './daydetailbox.scss';

class DayDetailBox extends Component {

	onBoxClick = (payload)=> {
		const {activeDay, timeSlot, openDialog, setAddEventsEndPoints} = this.props;
		openDialog();
		if( payload && payload.id >= 0){
			setAddEventsEndPoints({startDate: new Date(payload.startDate), endDate: new Date(payload.endDate), eventType:"edit", eventId: payload.id});
		}
		else{
			const endDate = new Date(activeDay.setHours(timeSlot.slotNo+1));
			const startDate = new Date(activeDay.setHours(timeSlot.slotNo));
			setAddEventsEndPoints({startDate:startDate, endDate:endDate, eventType:"add", eventId: null});
		}
	}

	render () {
		const { width, onCalendarClick, isEventListed, eventPresentInSlot} = this.props;

		const eventTitleText = ()=> eventPresentInSlot.map((IEvent, key)=> {
			return (<p
				className="single-event" key ={key}
				onClick={(e)=>{
					this.onBoxClick(IEvent);
					e.stopPropagation();
				}} >
				{IEvent.title}
			</p>);
		});

		return (
			<div
				className="day-event-box"
				style={{
					width: width
				}}
				onClick={this.onBoxClick}
				title = {isEventListed ? "This slot is already taken": null}
				>
				{ isEventListed ? eventTitleText(): null }
			</div>
		);
	}
}
DayDetailBox.propTypes = {
	width: PropTypes.string,
	onCalendarClick: PropTypes.func,
	isEventListed: PropTypes.number,
	openDialog: PropTypes.func,
	setAddEventsEndPoints: PropTypes.func,
	eventPresentInSlot: PropTypes.array
};

DayDetailBox.defaultProps ={
	width: '100%',
	isEventListed: false,
	onCalendarClick: function () {},
	openDialog: function() {},
	setAddEventsEndPoints: function() {}
};

export default DayDetailBox;
