import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
	render(){
		return(
			<div>
				<div className="companyCardName">
					{this.props.name}
				</div>
				<div className="companyCardText">
					{this.props.text}
				</div>
				<div>
					{this.props.link}
				</div>
			</div>
		)
	}
}


export default ProfileCard;