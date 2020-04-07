import React, { Component } from 'react';
import SideNav from './SideNav';
import "./App.css";
import Panel from './Panel';
import Select from 'react-select';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listPosts: [],
      value: { label: this.props.val, value: this.props.val },
      showPanel : false,
      title:'', author: '', selftext:'', url: ''
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.onClickSubreddit = this.onClickSubreddit.bind(this);
  }
  options = [
    { label: "Hot", value: 'hot' },
    { label: "New", value: 'new' },
    { label: "Top", value: 'top' },
    { label: "random", value: 'Random' },
    { label: "Rising", value: 'rising' }
  ];
  componentDidMount() {
    this.renderPosts({ label: "Hot", value: 'hot' });
  }
  onClickSubreddit(currPost){
    this.setState({showPanel: true, title: currPost.title, author: currPost.author, url: currPost.url, selftext: currPost.selftext})
    console.log('calling',currPost);
  //   return (
  //     <Panel
  // title = {currPost.title}
  // author = {currPost.author}
  // selftext = {currPost.selftext}
  // url = {currPost.url} />
  //   );
  console.log('showPanel',this.state.showPanel);
  return( this.state.showPanel ? 
    <div className='show-content'style="background: red; font-size: 40px;"> some data to test it </div> 
    : <div className='no-content'>nottrue</div>)
    //   <div style="background: red;">
    //   <div class="title"> {currPost.title} </div>
    //   <div class="content">
    //     {currPost.selftext}
    //     <span>${currPost.url}</span>
    //   </div>
    //   <div class="author"> Posted by {currPost.author} </div>
    // </div>
  
  }
 
  renderPosts = (postType) => {
    this.setState({ value: postType })
    console.log("postType", postType.value)
    fetch(`https://www.reddit.com/r/javascript/${postType.value}.json`)
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
          console.log(this.state.listPosts, 'currPosttitle', currPost.title, 'selfdabba', currPost.selftext, 'url', currPost.url, 'author', currPost.author, currPost.subreddit)
        }
        this.setState({ ...this.state, listPosts: arrayPosts });
      })
      .catch(function (err) {
        console.log(err); // Log error if any

      });
  };

  render() {
    const { listPosts } = this.state;
    return listPosts.length ? (
      <div>
        <React.Fragment>
          <h1>List of posts for Selected Subreddit</h1>
          <SideNav />
        </React.Fragment>
        <div class="options">
          <label>Post Type:</label>
          <Select options={this.options}
            value={this.state.value}
            onChange={value => this.renderPosts(value)}
            class="post-type" />
        </div>
        <div>
          {
            // <div>{listPosts.length}</div>
            listPosts.map((currPost, index) => {
              return (
                <div className='subreddit' key={index} onClick={(currPost) => this.onClickSubreddit(currPost)}>
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

               
              )
            })
          }

     {/* <div>
      <div class="title"> {this.state.title} </div>
      <div class="content">
     {this.state.selftext}
     <span>${this.state.url}</span>
    </div>
    <div class="author"> Posted by {this.state.author} </div>
    </div> */}
        </div>
      </div>
    ) : (<div>Loading...</div>);
  }
}
// App.defaultProps = { listPosts: [] };
export default App;