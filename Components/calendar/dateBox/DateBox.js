import React , { Component } from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './box.scss';

class DateBox extends Component {

	isCurrentMonth( month ) {
			const { currentMonth } = this.props;
			return month === currentMonth;
	}
	isCurrentDate ( date) {
		const {activeDate, currentMonth} = this.props;
		return currentMonth=== activeDate.getMonth() && date === activeDate.getDate();
	}

	getEnabledBox  ( propsDate ,isSelector, callback= null)  {
			const year = propsDate.getFullYear();
			const month = propsDate.getMonth();
			const day = propsDate.getDate();
			return isSelector ?
			(
				<p onClick = {() => {
									const presentDay= new Date(year, month, day);
									this.props.returnDate(presentDay);
									}}
									>
									{day}
				</p>):
				(<Link to = {`/${this.props.activeDisplayMode}/${year}/${month+1}/${day}`}  style={{
					color: this.isCurrentDate(day)? 'white' : null ,
					cursor: "pointer"

				}}>
							{day}
					</Link>) ;
	}

	getDisabledBox ( propsDate ) {
		return <p> {propsDate.getDate()} </p>
	}

	render () {
			const propsDate = new Date(this.props.dateItem);
			const year = propsDate.getFullYear();
			const month = propsDate.getMonth();
			const day = propsDate.getDate();
			return (<div className = "box-container" 	style = {{
					backgroundColor: this.isCurrentDate(day)? '#3480DD' : null,
					borderRadius: this.isCurrentDate(day)? '50%' : null,
				}}>
					{this.isCurrentMonth(propsDate.getMonth()) ? this.getEnabledBox(propsDate, this.props.isSelector) : this.getDisabledBox(propsDate) }
				</div>);
	}
}

DateBox.propTypes ={
	dateItem: PropTypes.object,
	activeDisplayMode: PropTypes.string,
	currentMonth: PropTypes.number,
	isSelector: PropTypes.bool,
	returnDate: PropTypes.func,
	activeDate: PropTypes.object
};

DateBox.defaultProps = {
	dateItem: new Date(),
	isSelector: false,
	activeDisplayMode: "day",
	currentMonth: 0,
}


export default DateBox;
