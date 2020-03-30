import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)
const API = 'AIzaSyDxI93BNnot3IO-BjombncdDjtmZmIpoR8';
const channelID = 'UCAvGapyifCtUlmNTagAl_sQ';
const result = 10;
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {
  constructor(){
    super();
    this.state = {youtube: [] };
    this.getVedio = this.getVedio.bind(this);
  }
  
  getVedio() {
    fetch(finalURL)
      .then(response => response.json())
      .then(json => {
       const youtube = json.items.map(obj =>  "https://www.youtube.com/embed/"+obj.id.videoId);
       this.setState({youtube});
      })
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
      <button onClick={this.getVedio}>Get more CBS Video's</button>
      <hr/>
        {
          this.state.youtube.map((link, i)=> {
           var frame = <div><iframe key={i} width="560" height="315" src={link}
           frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen></iframe></div>
           return frame

    })
        }
      </div>
    )
  }
}

export default Youtube;
