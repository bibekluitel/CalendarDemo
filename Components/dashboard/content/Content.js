import React , {Component} from 'react';
import DayDetail from './dayDetail';
import DayTitle from './dayTitle';
import './content.scss';

class Content extends Component {
	render() {
		return (
			<div className = "content-container">
				<DayTitle {...this.props}/>
				<DayDetail {...this.props}/>
		</div>);
	}
}

export default Content;
