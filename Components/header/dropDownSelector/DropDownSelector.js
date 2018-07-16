import React, { Component } from 'react';
import {Link} from  'react-router-dom';
import PropTypes from 'prop-types';

class DropDownSelector extends Component {
		constructor (props) {
			super (props);
			this.state = { isMenuListOpen: false};
		}

		toggleChild() {
			this.setState({ isMenuListOpen: !this.state.isMenuListOpen});
		}

		render () {
			const {activeDisplayMode,match} = this.props;
			const {params} = match;
			const getUrl = (mode) => {
				if(params.day){
					return `/${mode}/${params.year}/${params.month+1}/${params.day}`;
				}
				else if(params.month) {
					return `/${mode}/${params.year}/${params.month+1}`;
				}
				else if( params.year) {
					return `/${mode}/${params.year}`;
				}
				else {
					return `/${mode}`;
				}
			}
			return (
				<div className="dropdown">
					<button className="dropbtn" onClick ={()=>{this.toggleChild();}}>
						<p>
							{activeDisplayMode}
						</p>
						<i className="material-icons" style={{color:'#6D6D6D', fontSize: '20px', lineHeight: '20px'}}>
							arrow_drop_down
						</i>
					</button>
					<div className="dropdown-content" style={{ display: this.state.isMenuListOpen? 'block' : 'none'}}>
						<Link to = {getUrl('week')} style={{color: '#464646'}}>
							<p onClick = {()=> {this.toggleChild(); }}>
								week
							</p>
							</Link>
						<Link to = {getUrl('day')} style={{color: '#464646'}}>
							<p onClick = {() => {this.toggleChild();}}>
								day
							</p>
						</Link>
					</div>
				</div>);
		}
}

DropDownSelector.propTypes = {
		activeDisplayMode: PropTypes.string
}

DropDownSelector.defaultProps = {
	activeDisplayMode:'day'
}

export default DropDownSelector;
