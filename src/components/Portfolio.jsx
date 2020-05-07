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
    <Container color="red">
        <BrowserRouter>
            <Card.Group itemsPerRow={3}>
                {/* <Card>
                    <Image src={poochquest} wrapped ui={true} />
                    <Card.Content>
                        <Card.Header>Pooch Quest</Card.Header>
                        <Card.Meta>
                            <span className='date'>Created in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                            
                    <br />
                            <br />
                    Created with: 
                    <br />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>

                        <a href="https://github.com/acucunato/pooch-quest"><Icon name='linkify' /> Github Repo</a>
                        <br />
                        <a href="https://acucunato.github.io/pooch-quest/"> <Icon name='linkify' />Deployed app</a>
                        <br />
                        <br />
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={bthere} wrapped ui={true} />
                    <Card.Content>
                        <Card.Header>B. There.</Card.Header>
                        <Card.Meta>
                            <span className='date'>Created in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                            B. There. is a calendar app which utilizes the Eventful API. It is built in an MVC model. The goal behind this application is to create a space where a user can store all of the events they're interested in, without having to deal with a third party website.
                    <br />
                            <br />
                    Created with: .
                    <br />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>

                        <a href="https://github.com/tagine/space"><Icon name='linkify' />Github Repo</a>
                        <br />
                        <a href="https://fierce-temple-54990.herokuapp.com/"><Icon name='linkify' />Deployed app</a>
                        <br />
                        <br />
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={coronaconnection} wrapped ui={true} />
                    <Card.Content>
                        <Card.Header>Corona Connection</Card.Header>
                        <Card.Meta>
                            <span className='date'>Created in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                            During a time of social distancing, our communities need to be more connected than ever, especially those who are not as tech savvy as we are. The idea is to make the app accessible and that approach carries over in our development process as well as our design process. Users will be able to share critical information with their neighbors as well as pull the latest news articles relevant to Coronavirus developments.

                    <br />
                            <br />
                    Created with: React, News API, Express server, Socket IO, and Semantic UI.
                    <br />
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>

                        <a href="https://github.com/SeanCdeveloper/CoronaVirusConnection/"><Icon name='linkify' />Github Repo</a>
                        <br />
                        <a href="https://radiant-river-70166.herokuapp.com/"><Icon name='linkify' />Deployed app</a>
                        <br />
                        <br />
                    </Card.Content>
                </Card> */}
                <ProjectCard
                    screenshot={coronaconnection}
                    title="Corona Connection"
                    tech="React, News API, Express server, Socket IO, and Semantic UI"
                    Description="During a time of social distancing, our communities need to be more connected than ever, especially those who are not as tech savvy as we are. The idea is to make the app accessible and that approach carries over in our development process as well as our design process. Users will be able to share critical information with their neighbors as well as pull the latest news articles relevant to Coronavirus developments."
                    applink="https://github.com/SeanCdeveloper/CoronaVirusConnection/"
                    github="https://github.com/SeanCdeveloper/CoronaVirusConnection/" />
                <ProjectCard
                    screenshot={bthere}
                    title="B. There."
                    tech="Eventful API, jQuery, Express server, and Materialize CSS"
                    description="B. There. is a calendar app which utilizes the Eventful API. It is built in an MVC model. The goal behind this application is to create a space where a user can store all of the events they're interested in, without having to deal with a third party website."
                    applink="https://github.com/tagine/space"
                    github="https://fierce-temple-54990.herokuapp.com/" />
                <ProjectCard
                    screenshot={poochquest}
                    title="Pooch Quest"
                    tech="HTML, CSS, Materialize, Javascript, jQuery, TheDog API, and PetFinder API."
                    description="Pooch Quest is an application that assists the user in finding their perfect dog. As soon as the user searches, Pooch Quest gives relevant information about their desired breed along with adoptable dogs in their area.."
                    applink="https://github.com/SeanCdeveloper/CoronaVirusConnection/"
                    github="https://coronaconnect.herokuapp.com" />
                <ProjectCard
                    screenshot={employeedirectory}
                    title="Employee Directory"
                    tech="React, Semantic UI, and Express."
                    description="Employee Directory is a React app that sorts through employee salary data."
                    applink="https://arcane-temple-83433.herokuapp.com/"
                    github="https://github.com/tagine/employeedirectory2" />
                <ProjectCard
                    screenshot={budgettracker}
                    title="Budget Tracker"
                    tech="HTML, CSS, Express, Javascript."
                    description="This budget tracker application can help you balance your recurring expenses and income."
                    applink="http://offlinebudgets.herokuapp.com/"
                    github="https://github.com/tagine/offlinebudget" />
                <ProjectCard
                    screenshot={nytsearch}
                    title="NY Times Seach Engine"
                    tech="HTML, CSS, Ajax, and Javascript."
                    description="This is a search engine created exclusively for pulling articles from the New York Times. Designed in CSS."
                    github="https://github.com/tagine/searchengine" />
            </Card.Group>
        </BrowserRouter>
    </Container>
)

export default Portfolio;