import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
class App extends Component {
  state = {displayInfo : false};
  toggle = () =>{
      this.setState({displayInfo: !this.state.displayInfo})
  }
  render(){
    const showButton =   (
        <div className='show-button'>
            <button 
                className= 'toggle'
                onClick={this.toggle}
            >
                Read more.....</button>
        </div>
    )
    const showRender =  (
        <div className='show-render'>
            <p>My skill set includes JavaScript,Angular(2-8), ReactJS(16+), HTML, CSS, Bootstrap, Flexbox</p>
            <p>Currently working with Data & analytics team @Cisco, San Jose</p>
            <p>Can adapt to any framework/Library, and can code in Vanilla Javacsript without help of them as well.</p>
            <p>Having deep understanding of Javacsript core concepts</p>
            <p>Havind 4 plus years of industry experience, worked for Sales, E-commerce, operations domains</p>
            <p>I am looking forward for working on challenging projects and enhance my skills</p>
            <p>Always willing to learn and adapt to new technologies (not only front end development related)</p>
            <button className='show-less' onClick={this.toggle}>Show less</button>
        </div>
    )
      return (
          <div className='app'>
              <h1>Hello CBS Team!! I hope you are doing great.</h1>
              <h4>My name is Rama Varahabhatla, I am a Javascript Developer!!</h4>
              {this.state.displayInfo ? showRender : showButton}
            <hr/>
                <Projects/>
            <hr/>
            <SocialProfiles/>
          </div>

      )

  }

}


export default App;