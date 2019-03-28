import React, { Component } from 'react';
import './Team.css'
import anita from '../../images/profile/anita.jpg'
import hanad from '../../images/profile/hanad.jpg'
import ruban from '../../images/profile/ruban.jpg'
import audi from '../../images/profile/audi.jpg'
import deanna from '../../images/deanna.jpg'
import jennifer from '../../images/jennifer.jpg'
import marion from '../../images/marion.jpg'
import sunny from '../../images/sunny.jpg'

class Team extends Component {

	render(){
		let style = {marginTop: "10vh"}

		return(
				<div className="teamBackground">
					<div style={style} className="teamTitle">Our Team</div>
					<div className="grid">
						<div className="card">
							<img className="photo" src={anita} alt="anita"/>
							<div className="photoName">ANITA ILANGO</div>
							<div className="photoTitle"> Managing Director</div>
						</div>
						<div className="card">
							<img className="photo" src={ruban} alt="ruban"/>
							<div className="photoName">RUBAN RENGARAJU</div>
							<div className="photoTitle"> Tech Director</div>
						</div>
						<div className="card">
							<img className="photo" src={hanad} alt="hanad"/>
							<div className="photoName">HANAD MUSA</div>
							<div className="photoTitle"> Partnerships Director</div>
						</div>
						<div className="card">
							<img className="photo" src={audi} alt="audi"/>
							<div className="photoName">AUDI LIU</div>
							<div className="photoTitle"> Operations</div>
						</div>
					</div>
					<div className="teamTitle">Our Advisors</div>
					<div className="grid">
						<div className="card">
							<img className="photo" src={deanna} alt="deanna"/>
							<div className="photoName">DEANNA EVANS</div>
							<div className="photoTitle"> Startup UCLA Director</div>
						</div>
						<div className="card">
							<img className="photo" src={jennifer} alt="jennifer"/>
							<div className="photoName">DR. JENNIFER ​WALSKE</div>
							<div className="photoTitle">Anderson School Faculty</div>
						</div>
						<div className="card">
							<img className="photo" src={marion} alt="marion"/>
							<div className="photoName">MARION PATRICIO</div>
							<div className="photoTitle"> Program Manager</div>
						</div>
						<div className="card">
							<img className="photo" src={sunny} alt="sunny"/>
							<div className="photoName">DR. SUNNY ​SINGH</div>
							<div className="photoTitle">Angel Investor</div>
						</div>
					</div>
				</div>
		)
	}
}

export default Team

// className="photo"


// <div className="card">
// 	<div className="photoName">Anita Ilango</div>
// 	<img className="photo" src={anita} alt="anita"/>
// 	<div className="titlePosition">Managing Directior</div>
// 	<div>Computer Science 2021</div>
// </div>

// <div className="card">
// 	<div className="photoName">Ruban Rengaraju</div>
// 	<img className="photo" src={ruban} alt="ruban"/>
// 	<div className="titlePosition">Tech Directior</div>
// 	<div>Computer Science 2021</div>
// </div>

// <div className="card">
// 	<div className="photoName">Hanad Musa</div>
// 	<img className="photo" src={hanad} alt="hanad"/>
// 	<div className="titlePosition">Partnerships Directior</div>
// 	<div>Economics 2019</div>
// </div>

// <div className="card">
// 	<div className="photoName">Audi Liu</div>
// 	<img className="photo" src={audi} alt="audi"/>
// 	<div className="titlePosition">Partnerships Team</div>
// 	<div>Mathematics of Computation 2021</div>
// </div>