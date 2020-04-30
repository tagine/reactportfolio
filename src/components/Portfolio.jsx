import React from 'react'
import { Container, Card, Image, Icon, Grid } from 'semantic-ui-react'
import poochquest from "../img/poochquest.png"
import coronaconnection from "../img/coronaconnection.png"
import bthere from "../img/bthere.png"
import { BrowserRouter } from 'react-router-dom';

const Portfolio = () => (
    <Container color="red">
        <BrowserRouter>
            <Card.Group itemsPerRow={3}>
                <Card>
                    <Image src={poochquest} wrapped ui={true} />
                    <Card.Content>
                        <Card.Header>Pooch Quest</Card.Header>
                        <Card.Meta>
                            <span className='date'>Created in 2020</span>
                        </Card.Meta>
                        <Card.Description>
                            Pooch Quest is an application that assists the user in finding their perfect dog. As soon as the user searches, Pooch Quest gives relevant information about their desired breed along with adoptable dogs in their area.
                    <br />
                            <br />
                    Created with: HTML, CSS, Materialize, Javascript, jQuery, TheDog API, and PetFinder API.
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
                    Created with: Eventful API, jQuery, Express server, and Materialize CSS.
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
                </Card>
            </Card.Group>
        </BrowserRouter>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.
    </p>
    </Container>
)

export default Portfolio