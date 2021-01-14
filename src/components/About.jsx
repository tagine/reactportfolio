import React from "react";
// import browser from "../img/sunrise.jpeg";
import myImage from "../img/homelogo.png";
import { Container, Header, Image, Segment } from 'semantic-ui-react'
// import PropTypes from "prop-types";
// import AnimatedTypingComponent from "./components/AnimatedTypingComponent";

export default class About extends React.Component {
	render() {
		return (
			<Container
				id="about-container" textAlign="center">
				{/* <AnimatedTypingComponent/> */}
				<Header as="h1" id="about" className={this.props.bounceLeft}>
					About
				</Header>
				<Container>
					<Container className="col-12 col-lg-6 hidden">
						<Image
							size="medium" centered
							// className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<Segment><p>

						 Full-stack web developer with experience in Django, React, HTML, CSS, Node, REST APIs,
						 Express, jQuery, JavaScript, Git, MySQL, PostgreSQL, Github, and most recently Google
						 Cloud Platform. With a background in content strategy and design, I like to keep users
						 in mind when developing new features or debugging. I’m comfortable with Object Oriented
						 Programming.
						 </p>
							<p>
							I’m currently working at a small sustainability non-profit on a dev team of two, where I
							work in both: web development and dev-ops. In early 2020, I graduated with a full-stack
							web development certificate from an immersive coding bootcamp at University of
							Pennsylvania, which had a special focus on the MERN stack. In 2018, I was in a four-person
							cohort of web development fellows at design agency Interactive Mechanics.
							</p>
 							<p>
							I am also interested in contributing to more open source projects. The first
							of many contributions to come was for Peregrine, a Django-based CMS that
							is based on the Wagtail CMS.
						</p>
						</Segment>
					</Container>
					<Container>
						</Container>
					</Container>
				</Container>
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
