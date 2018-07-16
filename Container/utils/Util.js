import timeSlots from './TimeSlotInfo.js';

Date.prototype.addDays = function(days) {
	let date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

Date.prototype.getTimeSlot = function () {
	const timeSlotArray = timeSlots;
	return timeSlotArray;
};

Date.prototype.getTimeSlotName = function (slotNo) {
	return timeSlots.find( function (slotInfo)  {
			return (slotInfo.slotNo === slotNo);
	});
}

Date.prototype.getMonthName = function (month){
       const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	   return monthNames[month];
};

Date.prototype.getWeekName = function (day){
       const weekNames = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	   return weekNames[day];
};

Date.prototype.getMonthShortName = function (month){
       const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	   return monthShortNames[month];
};

Date.prototype.getWeekShortName = function (day){
       const weekShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	   return weekShortNames[day];
};


export const getPrevSunday = (d)=> {
			 d = new Date(d);
			let diff = d.getDate() - d.getDay(); // adjust when day is sunday
			return new Date(d.setDate(diff));
		};

export const getNextSaturday = (d)=> {
			d = new Date(d);
			let diff = d.getDate() - d.getDay() + 6; // adjust when day is sunday
			return new Date(d.setDate(diff));
		};

export const getAWeekDateData = ( year , month, day ) => {
	const activeDate = new Date ( year, month, day);
	const firstSundayofWeek = getPrevSunday(activeDate);
	const lastSaturdayofWeek = getNextSaturday(activeDate);
	return getDatesBetweenDates(firstSundayofWeek,lastSaturdayofWeek);
};

export const getAMonthDateData = ( year , month ) => {
	const firstDayofMonth = new Date ( year, month, 1);
	const lastDayOfMonth = new Date (year, month + 1, 0);
	const firstSundayofMonth = getPrevSunday(firstDayofMonth);
	const lastSaturdayofMonth = getNextSaturday(lastDayOfMonth);
	return getDatesBetweenDates(firstSundayofMonth,lastSaturdayofMonth);

};

export const getDatesBetweenDates = (startDate, finalDate) => {
	let dateArray = new Array();
	let currentDate = new Date(startDate);
	while (currentDate <= finalDate) {
		dateArray.push(new Date (currentDate));
		currentDate = currentDate.addDays(1);
	}
	return dateArray;
};

export const getNextWeekMid = (activeDate) => {
	activeDate = new Date(activeDate);

	const newDte = activeDate.getDate() + 7;
	return  new Date(activeDate.setDate(newDte));
};

export const getNextDay = (activeDate) => {
	activeDate = new Date (activeDate);
	const newDte = activeDate.getDate() + 1;
	return new Date (activeDate.setDate(newDte));
}
export const getPrevWeekMid = (activeDate) => {
	activeDate = new Date (activeDate);
	const newDate = activeDate.getDate() - 7;
	return  new Date(activeDate.setDate(newDate));
};

export const getprevDay = (activeDate) => {
	activeDate = new Date (activeDate);
	const newDate = activeDate.getDate() - 1;
	return new Date (activeDate.setDate(newDate));
}





export const isOccupied = (newStartDate, newEndDate, eventStartDate, eventEndDate) => {
	if(
		newStartDate.getTime() >= eventStartDate.getTime() &&
		newEndDate.getTime() <= eventEndDate.getTime()  ){
		return true;
	};
	return false;
};


export const isEventPresentInSlot = (events, startDate, endDate) => {
	return events.filter((indEvent) => {
		const eventStartDate = new Date (indEvent.startDate);
		const eventEndDate = new Date (indEvent.endDate);
		if( isOccupied (startDate, endDate, eventStartDate, eventEndDate)){
			return true;
		}
		return false;
	});
}
