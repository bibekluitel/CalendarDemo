import React , { Component } from 'react';
import './header.scss';
import Img from 'Images/calendarlogo.png';
import DropDownSelector from './dropDownSelector'
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
	render () {
        const { activeDisplayMode, prevDatetoLink, nextDatetoLink } = this.props;
		return (
			<div className = "header-container">
				<div className="logo-text-container">
					<div className = "header-logo-container">
						<img src = {Img} alt = "calendar"/>
						<p onClick ={()=> {localStorage.clear(); window.location.href = "#";}} title =" Click here to remove all Events.">
							Calendar
						</p>
					</div>
					<div className = "day-text">
						<p onClick= { () => { console.log("route to tady date");}}>
							Today
						</p>
						<div className = "arrow-container">
							<Link to={`/${activeDisplayMode}/${prevDatetoLink.getFullYear()}/${prevDatetoLink.getMonth()+1}/${prevDatetoLink.getDate()}`} >
								<i className="material-icons" style={{color:'#6D6D6D' , fontSize: '30px' , lineHeight: '45px' }}>
									chevron_left
								</i>
	                        </Link>
							<Link to={`/${activeDisplayMode}/${nextDatetoLink.getFullYear()}/${nextDatetoLink.getMonth()+1}/${nextDatetoLink.getDate()}`} >
								<i className="material-icons" style={{color:'#6D6D6D' , fontSize: '30px', lineHeight: '45px' }}>
									chevron_right
								</i>
	                        </Link>
						</div>
					</div>
				</div>
				<div className = "header-displaymode-selector" >
					<DropDownSelector  {...this.props}/>
				</div>
			</div>
		);

	}
}

Header.propTypes = {
	activeDisplayMode: PropTypes.string,
	prevDatetoLink: PropTypes.object,
	nextDatetoLink: PropTypes.object
};

Header.defaultProps = {
	activeDisplayMode: 'day',
};

export default Header;
