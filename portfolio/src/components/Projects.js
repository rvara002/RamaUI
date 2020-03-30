import React, {Component} from 'react';
import PROJECTS from '../data/projects';

class Project extends Component{
    render(){
        const {title, image, description, techstack} = this.props.project;

    return(
        <div style={{display: 'inline-block', width: 400, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt='image' style={{width:200, height: 150}}/>
            <p>{description}</p>
            <p>{techstack}</p>
        </div>
    )    
    }
}

class Projects extends Component {
    
    render(){
    return(
    <div className='projects'>
        <h2 className='title'>Some of the Projects from 2016-2020</h2>
        <div className='project'>
            {PROJECTS.map(PROJECT => {
                return(
                    <Project className='project' key={PROJECT.id} project={PROJECT}/>
                )})
            }
        </div>
    </div>
    )
    }

}

export default Projects;