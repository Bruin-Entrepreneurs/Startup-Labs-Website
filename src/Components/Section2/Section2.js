import React, { Component } from 'react';
import './Section2.css'
import Company from '../Company/Company'; 
import Program from '../Program/Program'

class Section2 extends Component {
	state = {

		// rgb(250, 224, 190)
		// rgb(244, 182, 187)
		// rgb(255, 254, 194)
		// rgb(201, 252, 205)
		// rgb(193, 223, 252)
		// rgb(278, 199, 230)

		companyObjArray: [
			{name: "Foreflo", backgroundColor: 'rgb(189, 214, 239)', animation: "unset", text: "Sed ut perspiciatis undeomnis inventore veritatis et quasi architecto aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
			{name: "Charipay", backgroundColor: 'rgb(240, 118, 143)', animation: "", text: "Sed ut ut fugit, sed quia consequuntur perspiciatis unde omnis inventore veritatis et quasi architecto aut odit a magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
			{name: "Generosity Designs", backgroundColor: 'rgb(240, 118, 143)', animation: "", text: "Sed ut perspiciatis unde omnis inventore veritatis et quasi architecto consectetur, adipisci velit, sed quia non  aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea velit esse quam nihil molestiae voluptate consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
			{name: "Performace Blendz", backgroundColor: 'rgb(240, 118, 143)', animation: "", text: "Sed ut perspiciatis unde omnis inventore veritatis et quasi architecto aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
			{name: "Powered", backgroundColor: 'rgb(240, 118, 143)', animation: "", text: "Sed iciatis unde omnis inventore veritatis ut persp et quasi architecto aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
			{name: "QueueRated", backgroundColor: 'rgb(240, 118, 143)', animation: "", text: "Sed ut aut odit  aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro perspiciatis unde omnis inventore veritatis et quasi architecto quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},
			{backgroundColor: 'rgb(189, 214, 239)'}
			// rgb(189, 214, 239)
		],
		index: 6,
		prevIndex: 0,
		companyFlag: 0,
		displayFlag: "program"
	}

	showOtherPageHandler = () => {
		if (this.state.displayFlag === "program"){
			this.setState({
				displayFlag: "companies",
				index: 0
			})
		} else {
			let tempObj = {...this.state.companyObjArray}
			tempObj[this.state.index].animation = ""
			tempObj[0].animation = "unset"
			tempObj[this.state.index].backgroundColor = "rgb(240, 118, 143)"
			tempObj[0].backgroundColor = "rgb(189, 214, 239)"
			this.setState({
				companyObjArray: tempObj,
				displayFlag: "program",
				index: 6
			});
		}
	}

	changeCompanyHandler = (i) => {

		let tempObj = {...this.state.companyObjArray}
		tempObj[this.state.index].backgroundColor = "rgb(240, 118, 143)";
		tempObj[this.state.index].animation = "";
		tempObj[i].backgroundColor = "rgb(189, 214, 239)";
		tempObj[i].animation = "unset"
		this.setState({
			index:i,
			companyObjArray: tempObj
		}); 

	}


	render(){
		let display
		if(this.state.displayFlag === "companies"){
			 display = <Company index={this.state.index} company={this.state.companyObjArray} companyClick={this.changeCompanyHandler} showOther={this.showOtherPageHandler}/>
		} else {
			 display = <Program showOther={this.showOtherPageHandler}/>
		}
		//rgb(230, 181, 192)
		let style = {
			backgroundColor: this.state.companyObjArray[this.state.index].backgroundColor
		}

		return(
			<div style={style} className="section2">
				{display}
			</div>
		)
	}
}


export default Section2;





