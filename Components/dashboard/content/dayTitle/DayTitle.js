import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './daytitle.scss';

class DayList extends Component {

	getDaysList = (activeDaysList, day) => {
		return activeDaysList.map((activeDay, key) => {
			return (
				<div
					className ="daydetail-header-text" key = {key}
					style={{
						width: `${100/activeDaysList.length}%` ,
						color: day===activeDay.getDate()? '#0082D6': null
					}}>
					<p className="day"> {activeDay.getWeekShortName(activeDay.getDay())} </p>
					<p className="date"> {activeDay.getDate()} </p>
				</div>)
		})
	}

	render(){
		const {activeDaysList, day} = this.props;
		return (
			<div className= "daytitle-container">
				<div className="time-slot">
				</div>
				{this.getDaysList(activeDaysList, day)}
			</div>
		);

	}
}

DayList.propTypes ={
	activeDaysList: PropTypes.array,
	day: PropTypes.number
};

export default DayList;
