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
		let execBoardArray = [
			{name:"ANITA ILANGO", title:"Managing Director", linkedin: "https://www.linkedin.com/in/anitailango/", src: anita}, 
			{name:"RUBAN RENGARAJU", title:"Incoming Director", linkedin: "https://www.linkedin.com/in/ruban-rengaraju/", src: ruban},
			{name:"HANAD MUSA", title:"Partnerships Director", linkedin: "https://www.linkedin.com/in/hanadmusa/", src: hanad}, 
			{name:"AUDI LIU", title:"Operations", linkedin: "https://www.linkedin.com/in/chun-yu/", src: audi}
		]
		let advisorArray = [
			{name:"DEANNA EVANS", title:"Startup UCLA Director", src: deanna}, 
			{name:"DR. JENNIFER ​WALSKE", title:"Anderson School Faculty", src: jennifer},
			{name:"MARION PATRICIO", title:"Program Manager", src: marion}, 
			{name:"DR. SUNNY ​SINGH", title:"Angel Investor", src: sunny}
		]
		let execBoard = execBoardArray.map(data => {
			return(
				<div className="card">
					<a href={data.linkedin} target="_blank" rel="noopener noreferrer" alt={data.name}>
						<img className="photo" src={data.src}/>
					</a>
					<div className="photoName">{data.name}</div>
					<div className="photoTitle">{data.title}</div>
				</div>
			)
		})

		let advisors = advisorArray.map(data => {
			return(
				<div className="card">
					<img className="photo" src={data.src} alt={data.name}/>
					<div className="photoName">{data.name}</div>
					<div className="photoTitle">{data.title}</div>
				</div>
			)
		})

		return(
				<div className="teamBackground">
					<div style={style} className="teamTitle">Our Team</div>
					<div className="grid">
						{execBoard}
					</div>
					<div className="teamTitle">Our Advisors</div>
					<div className="grid">
						{advisors}
					</div>
				</div>
		)
	}
}

export default Team
