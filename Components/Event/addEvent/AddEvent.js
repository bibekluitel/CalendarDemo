import React, {Component} from 'react';
import DateAndTimePicker from './dateandTimePicker';
import EndDateAndTimePicker from './dateandTimePicker';
import CloseButtton from 'Images/close.png';
import PropTypes from 'prop-types';
import './addevent.scss';

class AddEvent extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : props.title,
			startDate: new Date(props.startDate),
			endDate: new Date(props.endDate),
		};
	}

	updateStartDate = (updatedDate) => {
		this.setState ({ startDate : updatedDate })
	}

	updateEndDate = (updatedDate) => {
		this.setState ({ endDate: updatedDate});
	}

	handleOnClick = (e) => {
		e.stopPropagation();
	}

	onTitleChange = (e) =>{
		this.setState({
			title: this.title.value
		});
		e.stopPropagation();
	}

	submitData =() => {
		if(this.props.eventType === "edit"){
			this.props.updateEvent({
				startDate: this.state.startDate,
				endDate: this.state.endDate,
				title: this.state.title,
				id: this.props.eventToDisplay.id
			})
		}
		else{
			this.props.addEvent({
				startDate: this.state.startDate,
				endDate: this.state.endDate,
				title: this.state.title
			});

		}
		this.props.closeDialog();
	}

	deleteEvent = () => {
		this.props.deleteEvent({
			id: this.props.eventToDisplay.id
		})
		this.props.closeDialog();
	}

	render () {
		const {	startDate,	endDate } = this.state;
		const { getAMonthDateData,closeDialog, eventType, errorNotifier} = this.props;

		return (
			<div className="add-event-container" onClick ={this.handleOnClick}>
					<div className="close-dialog" onClick ={closeDialog}>
						<img src={CloseButtton} alt = ""/>
					</div>
					<input
						className= "add-title" value= {this.state.title }
						onChange = {this.onTitleChange}
						ref = {(title)=> {this.title = title;}}
						/>
					<div className="date-and-time" >
						<div className="start-date-picker">
							<DateAndTimePicker
								value = {startDate} updatedDate = {this.updateStartDate}
								key = {0} getAMonthDateData = {getAMonthDateData}
								errorNotifier ={errorNotifier}
								/>
						</div>
						<div className="end-date-picker">
							<EndDateAndTimePicker
								 value = {endDate} updatedDate = {this.updateEndDate}
								 startDate = {startDate} isRightAligned
								  key= {1} getAMonthDateData = {getAMonthDateData}
								  errorNotifier ={errorNotifier}
								   />
					   </div>
					</div>

					<div className="button-container">
						<div className="cancel-button" onClick = {closeDialog}>
							<p>Cancel </p>
						</div>
						{eventType ==="edit"?
							(<div className = "delete-button" onClick= {this.deleteEvent}>
								<p> Delete </p>
							</div>) : null}
						<div className = "submit-button" onClick= {this.submitData}>
							<p> {eventType ==="edit"? "Update" : "Submit"} </p>
						</div>
					</div>
			</div>

		);
	}

}
AddEvent.propTypes = {
	getAMonthDateData: PropTypes.func,
	closeDialog: PropTypes.func,
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	title: PropTypes.string,
	addEvent: PropTypes.func,
	closeDialog: PropTypes.func,
	errorNotifier: PropTypes.func
};

AddEvent.defaultProps = {
	startDate: '2018 07 03',
	endDate: '2019 09 03',
	title: " Add a Title",
	getAMonthDateData: function () {},
	closeDialog: function () {},
	addEvent: function () {},
	closeDialog: function () {}
};

export default AddEvent;
