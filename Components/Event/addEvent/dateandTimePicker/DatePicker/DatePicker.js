import React, {Component} from 'react';
import Calendar from 'Components/calendar';
import './datepicker.scss';
import PropTypes from "prop-types";

class DatePicker extends Component {
	render () {
		const {value, isRightAligned, returnDate, getAMonthDateData} = this.props;
		return (
			<div className="date-picker" style= {{right: isRightAligned ? 0:null, left: !isRightAligned? 0: null}}>
				<Calendar
					year = {value.getFullYear()}
					month = {value.getMonth()}
					activeDate = {value}
					isSelector
					returnDate = {returnDate}
					getAMonthDateData = {getAMonthDateData}
					/>
			</div>
		)
	}
}
DatePicker.propTypes = {
	value: PropTypes.object,
	isRightAligned: PropTypes.bool,
	returnDate: PropTypes.func,
	getAMonthDateData: PropTypes.func

};
export default DatePicker;
