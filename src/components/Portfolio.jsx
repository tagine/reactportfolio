import React from 'react'
import { Container, Card, Image, Icon, Grid } from 'semantic-ui-react'
import poochquest from "../img/poochquest.png"
import coronaconnection from "../img/coronaconnection.png"
import budgettracker from "../img/budgettracker.png"
import nytsearch from "../img/nytsearch.png"
import bthere from "../img/bthere.png"
import employeedirectory from "../img/employeedirectory.png"
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from './ProjectCard'

const Portfolio = (props) => (
    <Container>
        {/* // <BrowserRouter> */}
            <Card.Group itemsPerRow={3}>
                <ProjectCard
                    screenshot={coronaconnection}
                    title="Corona Connection"
                    tech="React, News API, Express, Passport JS, Socket IO, and Semantic UI"
                    description="During a time of social distancing, our communities need to be more connected than ever, especially those who are not as tech savvy as we are. The idea is to make the app accessible and that approach carries over in our development process as well as our design process. Users will be able to share critical information with their neighbors as well as pull the latest news articles relevant to Coronavirus developments."
                    applink="https://coronaconnect.herokuapp.com/"
                    github="https://github.com/SeanCdeveloper/CoronaVirusConnection"/>
                <ProjectCard
                    screenshot={bthere}
                    title="B. There."
                    tech="Eventful API, jQuery, Express server, and Materialize CSS"
                    description="A calendar built in an MVC model. The goal behind this application is to create a space where a user can store all of the events they're interested in."
                    applink="https://fierce-temple-54990.herokuapp.com/"
                    github="https://github.com/tagine/space"/>
                <ProjectCard
                    screenshot={poochquest}
                    title="Pooch Quest"
                    tech="HTML, CSS, Materialize, Javascript, jQuery, TheDog API, and PetFinder API."
                    description="Pooch Quest is an application that assists the user in finding their perfect dog. As soon as the user searches, Pooch Quest gives relevant information about their desired breed along with adoptable dogs in their area."
                    //applink="https://acucunato.github.io/pooch-quest/"
                    github="https://github.com/tagine/pooch-quest"/>
                <ProjectCard
                    screenshot={employeedirectory}
                    title="Employee Directory"
                    tech="React, Semantic UI, and Express."
                    description="Employee Directory is a React app that sorts through employee salary data."
                    //applink="https://arcane-temple-83433.herokuapp.com/"
                    github="https://github.com/tagine/employeedirectory2"/>
                <ProjectCard
                    screenshot={budgettracker}
                    title="Budget Tracker"
                    tech="HTML, CSS, Express, Javascript."
                    description="This budget tracker application can help you balance your recurring expenses and income."
                    //applink="http://offlinebudgets.herokuapp.com/"
                    github="https://github.com/tagine/offlinebudget"/>
                <ProjectCard
                    screenshot={nytsearch}
                    title="NY Times Seach Engine"
                    tech="HTML, CSS, Ajax, and Javascript."
                    description="This is a search engine created exclusively for pulling articles from the New York Times. Designed in CSS."
                    //applink="https://tagine.github.io/searchengine/"
                    github="https://github.com/tagine/searchengine"/>
            </Card.Group>
        {/* </BrowserRouter> */}
    </Container>
)

export default Portfolio;