import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function ProjectCard (props) {
  
    return(
      <Card>
    <Image src={props.screenshot} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className='tech'>{props.tech}</span>
      </Card.Meta>
      <Card.Description>
       {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={props.applink}><Icon name='linkify' /> Deployed App </a>
      <br/>
      <a href={props.github}><Icon name='linkify' /> Github Repo </a>
    </Card.Content>
  </Card>
    );
};

export default ProjectCard;