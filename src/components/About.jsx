import React from "react";
// import browser from "../img/sunrise.jpeg";
import myImage from "../img/ranaheadshot.jpg";
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
							I’m a Web Developer with interests in well-designed
							user-centered projects. I have a passion for accessibility
							and would love to work on more projects that include it as a
							core tenet. I built my first website when I was ten years old,
							it was for a local band. Finding out about the right-click and
							view source feature in Mozilla Firefox changed my life back
							then. I still find myself right-clicking these days, but mostly
							to inspect different elements. My interest in actively learning
							about Web Development was renewed with my fellowship with Interactive
							Mechanics '17-'18.</p>
							<p>
							As a former journalist, I have a background in content strategy. As
							someone who has been running their own business and contracting for
							years, I am now looking for a fulltime web development position. I am
							also interested in contributing to more open source projects. The first of
							many contributions to come was for Peregrine, a Django-based CMS that is based on
							the Wagtail CMS. I added a minor contribution of a footer to the project.
							
							I live in Philadelphia, with my pet-turtle, Murphy Brown, Jr. But we’re
							both willing to relocate for the right opportunity.
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
