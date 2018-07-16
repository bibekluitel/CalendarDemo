import React, {Component} from 'react';
import propTypes from "prop-types";
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import './dateandtimepicker.scss';

class EndDateAndTimePicker extends Component {
	constructor (props) {
		super(props);
		this.state= {
			isDatePickerOn: false,
			isTimePickerOn:  false,
			dateTime: props.value,
			timeHours: props.value.getHours(),
			startDate: props.startDate
		};
	}
	toggleDatePicker = () => {
		this.setState ({
			isDatePickerOn: !this.state.isDatePickerOn,
			isTimePickerOn: false
		});
	}

	toggleTimePicker = () => {
		this.setState ({
			isTimePickerOn: !this.state.isTimePickerOn,
			isDatePickerOn: false
		});
	}

	componentWillReceiveProps (nextProps){
		this.setState({
			isDatePickerOn: false,
			isTimePickerOn:  false,
			dateTime: nextProps.value,
			startDate: nextProps.startDate

		});
		this.closeAll();
	}

	closeAll = () => {
		this.setState ({ isDatePickerOn: false, isTimePickerOn: false})
	}

	updatedDate = ( date) => {
		const newDate = new Date (date.setHours(this.state.timeHours));
		const {startDate} = this.state;
		if( startDate && newDate.getTime() < startDate.getTime()){
			this.props.errorNotifier({message: "End Date must be greater than starting Date"});
			const t = new Date (startDate);
			const newDateAfterValidation = new Date(t.setHours(t.getHours()+1));
			this.props.updatedDate(newDateAfterValidation);
		}
		else{
			this.props.updatedDate(newDate);
		}
	}

	updatedTime = (hour) => {
		const stateDate = new Date (this.state.dateTime);
		const {startDate} = this.state;
		const newDate = new Date (stateDate.setHours(hour));

		if( startDate && newDate.getTime() < startDate.getTime()){
			this.props.errorNotifier({message: "End Date must be greater than starting Date"});
			const t = new Date (startDate);
			const newDateAfterValidation = new Date(t.setHours(t.getHours()+1));
			this.props.updatedDate(newDateAfterValidation);
		}
		else{
			this.props.updatedDate(newDate);
		}
	}


	render () {
		const {value, updatedDate, getAMonthDateData, isRightAligned, startDate} = this.props;
		const { isDatePickerOn, isTimePickerOn } = this.state;
		const timerSlotInfo = value.getTimeSlotName(value.getHours());
		return (
			<div className = "date-time-picker">
				<div className="date-time-container" >
					 <div className="date-container" onClick = {this.toggleDatePicker}>
						 {value.getMonthShortName(value.getMonth())} {value.getDate()}   {value.getFullYear()}

					 </div>
					 <div className="time-container" onClick ={this.toggleTimePicker}>
						 {timerSlotInfo.startTime? timerSlotInfo.startTime : null}
	 				</div>
				</div>
				{
				   isDatePickerOn ?
				   <DatePicker
					   value={value}
					   getAMonthDateData = {getAMonthDateData}
					   returnDate = {this.updatedDate}
					   isRightAligned = {isRightAligned}
					   />: null
				   }
				   {
					  isTimePickerOn ?
					  <TimePicker
						  updateTime={this.updatedTime}
						  />: null
					  }

			</div>
		);
	}
}
EndDateAndTimePicker.propTypes = {
	value: propTypes.object,
	updatedDate: propTypes.func,
	getAMonthDateData: propTypes.func,
}

export default EndDateAndTimePicker;
