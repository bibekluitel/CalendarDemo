import React , {Component} from 'react';
import DayDetailBox from './dayDetailBox';
import PropTypes from 'prop-types';
import './dayDetail.scss';

class DayDetail extends Component {
	getTimeSlotdata() {
		const { activeDate, activeDaysList, events, isEventPresentInSlot, setAddEventsEndPoints, openDialog } = this.props;
		const timeSlots = activeDate.getTimeSlot();
		return timeSlots.map((timeSlot , key) => {
			const getDaysEventslist = activeDaysList.map( (activeDay, key)  => {
				const p =  new Date (activeDay);
				const startDate = new Date ( p.setHours(timeSlot.slotNo));
				const endDate = new Date (p.setHours(timeSlot.slotNo+1));
				const eventPresentInSlot = isEventPresentInSlot(events, startDate, endDate);
				const isEventListed =eventPresentInSlot.length;
				return (<DayDetailBox
								key = {key}
								width= {`${100/activeDaysList.length}%`}
								activeDay = {activeDay}
								timeSlot = {timeSlot}
								setAddEventsEndPoints= {setAddEventsEndPoints}
								isEventListed= {isEventListed}
								openDialog = {openDialog}
								eventPresentInSlot ={eventPresentInSlot}
							/>);
			});

			return (
				<div  className="time-slot-row" key = {key} >
					<div className="time-slot">
						{ timeSlot.slotNo ? <p>{timeSlot.startTime}</p> : null}
					</div>
					{getDaysEventslist}
				</div>
			);
		});

	}

	render (){
		return (
			<div className= "daydetail-container">
				{this.getTimeSlotdata()}
			</div>
		)
	}
}
DayDetail.propTypes = {
	activeDate: PropTypes.object,
	activeDaysList: PropTypes.array,
	events: PropTypes.array,
	isEventPresentInSlot: PropTypes.func,
	setAddEventsEndPoints: PropTypes.func,
	openDialog: PropTypes.func
};

DayDetail.defaultProps = {
	activeDate: {},
	activeDaysList: [],
	events: [],
	isEventPresentInSlot: function () {},
	setAddEventsEndPoints: function () {},
	openDialog: function () {}
};
export default DayDetail;
