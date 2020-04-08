import React, { Component } from 'react';
import SideNav from './SideNav';
import "./App.css";
import Select from 'react-select';
import {subscriber, messageService } from "../messageService";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listPosts: [],
      value: { label: this.props.val, value: this.props.val },
      showPanel : false, activeLink: null,
      title:'', author: '', selftext:'', url: '', selectedSubreddit:'javascript' , x: '', y: '', e:'', z:'',a:''
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.handlePanel = this.handlePanel.bind(this);
  }

  componentDidMount() {
    subscriber.subscribe((v)=>{
      // let {selectedSubreddit} = this.state.selectedSubreddit;
      this.state.selectedSubreddit = v;
      this.renderPosts({ label: "Top", value: 'top', selectedSubreddit: this.state.selectedSubreddit });
    });
  }
  handleClick = id => {
    this.setState({ activeLink: id });
  };

 
  renderPosts = (postType) => {
    this.setState({ value: postType });
    // this.setState({ selectedSubreddit: decodeURIComponent(this.state.selectedSubreddit)})
    fetch(`https://www.reddit.com${postType.selectedSubreddit.url}${postType.value}.json`)
      .then((res) => {
        // Return the response in JSON format
        console.log(res.json)
        return res.json();

      })
      .then((res) => {
        const posts = res.data.children;
        let arrayPosts = [];

        for (let i = 0; i < posts.length; i++) {
          let currPost = posts[i].data;
          arrayPosts.push(currPost)
          // console.log(this.state.listPosts, 'currPosttitle', currPost.title, 'selfdabba', currPost.selftext, 'url', currPost.url, 'author', currPost.author, currPost.subreddit)
        }
        this.setState({ ...this.state, listPosts: arrayPosts });
      })
      .catch(function (err) {
        console.log(err); // Log error if any

      });
  };
  handlePanel(e, x,y,z,a){
    console.log(e,x,y)
    this.setState({
      x: x,
      y: y,
      z:z,
      a:a
    });
  }

  render() {
    const { listPosts } = this.state;
    const {activeLink} = this.state;
    return listPosts.length ? (
      <div>
        <br></br>
<p class="junioursubreddit">The current selected post  is 
( title: {this.state.x}, <br></br> url:  {this.state.y}, <br></br> selftext: {this.state.z}, <br></br> author: {this.state.a})</p>
        <React.Fragment>
    <h1>Selected  Subreddit: '{this.state.selectedSubreddit.title}'</h1>
          <SideNav />
        </React.Fragment>
        <div>
          {
            // <div>{listPosts.length}</div>
            listPosts.map((currPost, index) => {
              return (
<div  onClick={() => this.handleClick(currPost.title, currPost.url, currPost.selftext, currPost.author)}
                  className={
                    currPost.title.className === activeLink ? "sub" : "" +
                    (currPost.title === activeLink ? "sub " : "")
                  }>
                <div className='subreddit' key={index}  onClick={ (e) => this.handlePanel(e,currPost.title, currPost.url, currPost.selftext, currPost.author )}>

                  <div class="title"> {currPost.title} </div>
                  <div class="content">
                    {currPost.selftext}
                    <br></br>
                    <span>${currPost.url}</span>
                  </div>
                  <div class="author"> Posted by {currPost.author} </div>
                  <br></br>
                 
                  <div>
              
</div>
</div>
</div>
              )
            })
          }

        </div>
      </div>
    ) : (<div>Loading...</div>);
  }
}
export default App;