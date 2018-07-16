import React , {Component} from 'react';
import propTypes from 'prop-types';
import DateBox from './dateBox';

import './calendar.scss';

class Calendar extends Component {
	constructor (props) {
		super(props);
		this.state = {
			sidebarMonth: props.month,
			sideBarYear: props.year
		};
	}

	componentWillReceiveProps (nextProps) {
		this.setState({
			sidebarMonth: nextProps.month,
			sideBarYear: nextProps.year
		})
	}

	getdatesIcons ( currentMonth , dateList) {
			return dateList.map((dateItem, key)=> {
					return (<DateBox
								dateItem = {dateItem}
								currentMonth = {currentMonth}
								activeDate= {this.props.activeDate}
								key = {key}
								activeDisplayMode={this.props.activeDisplayMode}
								isSelector = {this.props.isSelector}
								returnDate = {this.props.returnDate}
								/>);
			});
	}

	changeMonth(newMonth, newYear){
		this.setState({
			sidebarMonth: newMonth,
			sideBarYear: newYear
		});
	}

	nextMonth = ()=> {
		const {sidebarMonth, sideBarYear} = this.state;
		const tempDate  = new Date (sideBarYear, sidebarMonth , 1);
		const newDate =  new Date(tempDate.setMonth(sidebarMonth+1));

		this.changeMonth( newDate.getMonth(), newDate.getFullYear());
	}


	prevMonth =() => {
		const {sidebarMonth, sideBarYear} = this.state;
		const tempDate  = new Date (sideBarYear, sidebarMonth , 1);
		const newDate =  new Date(tempDate.setMonth(sidebarMonth-1));
		this.changeMonth( newDate.getMonth(), newDate.getFullYear());
	}

	render(){
		const {sidebarMonth, sideBarYear } = this.state;
		const {activeDate, getAMonthDateData} = this.props;
		const dateList = getAMonthDateData(sideBarYear, sidebarMonth);
			return (
				<div className = "calendar-container" >
					<div className="calendar-header">
						<div className="calendar-date-holder">
							<p className="month"> {activeDate.getMonthName(sidebarMonth)} </p>
							<p className="year"> {sideBarYear} </p>
						</div>
						<div className="calenar-arrow-holder">
							<div className="left-arrow" onClick={this.prevMonth}>
								<i className="material-icons" style={{color:'#6D6D6D' , fontSize: '20px' , lineHeight: '30px' }}>
									chevron_left
								</i>
							</div>
							<div className="right-arrow" onClick={this.nextMonth}>
								<i className="material-icons" style={{color:'#6D6D6D' , fontSize: '20px', lineHeight: '30px' }}>
									chevron_right
								</i>
							</div>
						</div>
					</div>
					<div className="week-holder">
						<p className="week-days">Sun</p>
						<p className="week-days">Mon</p>
						<p className="week-days">Tue</p>
						<p className="week-days">Wed</p>
						<p className="week-days">Thu</p>
						<p className="week-days">Fri</p>
						<p className="week-days">Sat</p>
					</div>
					<div className="calendar-boxdate-holder">
						{this.getdatesIcons(sidebarMonth, dateList)}
					</div>
				</div>
			);
	}
}

export default Calendar;

Calendar.propTypes = {
	month: propTypes.number,
	year: propTypes.number,
	activeDate: propTypes.object,
	getAMonthDateData: propTypes.func,
	//below optionare to  be used only for selector mode
	isSelector: propTypes.bool,
	returnDate: propTypes.returnDate

};

Calendar.defaultProps = {
	returnDate: function a () {}
}
