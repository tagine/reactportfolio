import React from "react";
import layers from "../img/steel.jpeg";
import cogwheel from "../img/cog.jpg";
import pen from "../img/pen.png";
import browser from "../img/sunrise.jpeg";
import myImage from "../img/ranaheadshot.jpg";
// import PropTypes from "prop-types";
// import AnimatedTypingComponent from "./components/AnimatedTypingComponent";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				{/* <AnimatedTypingComponent></AnimatedTypingComponent> */}
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={layers} alt="" />
						<h4></h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={pen} alt="" />
						<h4></h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={cogwheel} alt="" />
						<h4></h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={browser} alt="" />
						<h4></h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
							I’m a Web Developer with interests in well-designed
							user-centered projects. I have a passion for accessibility
							and would love to work on more projects that include it as a
							core tenet. I built my first website when I was ten years old,
							it was for a local band. Finding out about the right-click and
							view source feature in Mozilla Firefox changed my life back
							then. I still find myself right-clicking these days, but mostly
							to inspect different elements. My interest in actively learning
							about Web Development was renewed with my fellowship with Interactive
							Mechanics '17-'18.
							
							As a former journalist, I have a background in content strategy. As
							someone who has been running their own business and contracting for
							years, I am now looking for a fulltime web development position. I am
							also interested in contributing to more open source projects. My only
							contribution so far is for Peregrine, a Django-based CMS that uses Wagtail
							as a framework. I added a minor contribution of a footer to the project.
							
							I live in Philadelphia, with my pet-turtle, Murphy Brown, Jr. But we’re
							both willing to relocate for the right opportunity.
						</p>
					</div>
					<div>
						
						</div>
					</div>
				</div>
		);
	}
}

// About.propTypes = {
// 	bounceLeft: PropTypes.string,
// 	fadeInLeft: PropTypes.string,
// 	fadeInRight: PropTypes.string,
// 	fadeIn: PropTypes.string,
// 	tada: PropTypes.string
// };
