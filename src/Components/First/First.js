import React, {Component} from 'react';
import './First.css'



class First extends Component {
	render(){
		return(
			<div className="background1"> 
	
				

				<div className="words" href=""><div>STARTUP</div> <div>LABS</div></div>

				<div className="love">Made with <span className="heart"></span> by <span className="be"> <a href="http://bruinentrepreneurs.org/" target="_blank" rel="noopener noreferrer">Bruin Entrepreneurs </a></span></div>

				<a href="https://docs.google.com/forms/d/e/1FAIpQLScFJw4J9Il54SVfj2rTUyGqeBA0vJjBoAiH7DHV1hytlCt_Ag/viewform" target="_blank" rel="noopener noreferrer"> 
					<div className="apply_button">APPLY NOW!</div>
				</a>
					


				
			</div>
		)
	}
	
}

export default First;

