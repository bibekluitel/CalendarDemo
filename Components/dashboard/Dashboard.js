import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/header';
import SideBar from 'Components/sidebar';
import EventsUI from 'Container/Events.js';
import Content from './content';
import './dashboard.scss';

class Dashboard extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isDialogOpen: false,
			startDate: props.activeDay,
			endDate: props.activeDay,
			eventId: null,
			eventType: "add"
		};
	}

	openDialog = ()=>{
		this.setState({isDialogOpen: true});
	}

	closeDialog = ()=>{
		this.setState({isDialogOpen: false});
	}

	setAddEventsEndPoints = ({startDate, endDate, eventType, eventId}) => {
		this.setState({
			startDate: startDate,
			endDate: endDate,
			eventType: eventType,
			eventId: eventId
		})
	}

	render () {
		return (
			<div className = "dashboard-container">
				<div className = "header">
					<Header {...this.props} />
				</div>
				<div className="dashboard-content-wrapper" >
					<div className = "sidebar-holder" >
						<SideBar {...this.props} />
					</div>
					<div className = "content-holder" >
						<Content
							{...this.props}
							openDialog = {this.openDialog}
							closeDialog = {this.closeDialog}
							setAddEventsEndPoints= {this.setAddEventsEndPoints}
							/>
					</div>
				</div>
				{
					this.state.isDialogOpen ?
					<EventsUI {...this.state} closeDialog={this.closeDialog}/>
					:
					null
				}

			</div>);
	}
}

Dashboard.propTypes = {
	activeDay: PropTypes.object,
}

Dashboard.defaultProps = {
	activeDay: new Date()
}

export default Dashboard;
