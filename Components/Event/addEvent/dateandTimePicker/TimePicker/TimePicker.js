import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './timepicker.scss';

class TimePicker extends Component {

	getTimeList = (updateTime) => {
		const newDate = new Date();
		return newDate.getTimeSlot().map((timeSlot) => {
			return (
				<div
					className="time-item"
					 onClick = {() => {
						 	updateTime(timeSlot.slotNo)
						}}
					key = {timeSlot.slotNo}
				>
				{timeSlot.startTime}
			</div>)
		});
	}

	render () {
		const {updateTime} = this.props;
		return (
			<div className ="time-picker-contianer">
				{this.getTimeList(updateTime)}
			</div>
		);
	}
}

TimePicker.propTypes = {
	updateTime: PropTypes.func
}

export default TimePicker;
