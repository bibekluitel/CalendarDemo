import React , { Component } from 'react';
import Calendar from 'Components/calendar';
import './sidebar.scss';

class SideBar extends Component {

	render () {
			return (
				<div className = "sidebar-contianer">
					<Calendar {...this.props} />
				</div>
			);
	}
}

export default SideBar;
