import {connect } from 'react-redux';
import Dashboard from './../Components/dashboard';
import * as utilFunction from './utils/Util.js'
import * as actions from './../actions/Action.js';
import timeSlotInfo from './utils/TimeSlotInfo.js';

const mapStateToProps = ( state, ownProps) => {
	const {eventsList} = state.events;
	let { displayMode, year, month, day } = ownProps.match.params;
	const { events } = state;
	const today = new Date();

	const weekday = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	// const months = ["Januaray","February","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


	const activeDisplayMode = displayMode ? displayMode : "day";

	year = year ? +year : +today.getFullYear();

	month = month ? (+month-1)%12 : +today.getMonth();

	day = day ? +day : +today.getDate();

	const activeDate = new Date ( year, month, day);

	const activeMonthDateList = utilFunction.getAMonthDateData ( year , month);

	const activeWeekList = utilFunction.getAWeekDateData ( year, month, day);

	const activeDaysList = activeDisplayMode === "week" ? activeWeekList : [ activeDate ];

	const nextDatetoLink = 	activeDisplayMode === "week" ?
							utilFunction.getNextWeekMid(activeDate):
							utilFunction.getNextDay (activeDate);

	const prevDatetoLink = activeDisplayMode === "week" ?
							utilFunction.getPrevWeekMid(activeDate):
							utilFunction.getprevDay(activeDate);
	// const sider
	return {
		...state,
		dateList: activeMonthDateList,
		currentMonth: month,
		activeWeekList: activeWeekList,
		activeDaysList: activeDaysList,
		year: year,
		activeDate: activeDate,
		month: month,
		day: day,
		weekday: weekday,
		activeDisplayMode: activeDisplayMode,
		nextDatetoLink: nextDatetoLink,
		prevDatetoLink: prevDatetoLink,
		getAMonthDateData: utilFunction.getAMonthDateData,
		isEventPresentInSlot: utilFunction.isEventPresentInSlot

	};
};

export default connect(mapStateToProps, actions)(Dashboard);
