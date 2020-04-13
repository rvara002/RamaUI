import React, { Component } from "react";
import SideNav from "./SideNav";
import "../styles/App.css";
import Select from "react-select";
import { subscriber, messageService } from "../messageService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: [],
      value: { label: this.props.val, value: this.props.val },
      showPanel: false,
      activeLink: null,
      selectedSubreddit: "javascript",
      titlepost: "",
      urlpost: "",
      selftextpost: "",
      authorpost: "",
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.handlePanel = this.handlePanel.bind(this);
  }

  componentDidMount() {
    subscriber.subscribe((v) => {
      this.state.selectedSubreddit = v;
      this.renderPosts({
        label: "Top",
        value: "top",
        selectedSubreddit: this.state.selectedSubreddit,
      });
    });
  }
  handleClick = (id) => {
    this.setState({ activeLink: id });
  };

  onImageLoad = (event) => {};

  renderPosts = (postType) => {
    this.setState({ value: postType });
    fetch(
      `https://www.reddit.com${postType.selectedSubreddit.url}${postType.value}.json`
    )
      .then((res) => {
        // Return the response in JSON format
        return res.json();
      })
      .then((res) => {
        const posts = res.data.children;
        let arrayPosts = [];

        for (let i = 0; i < posts.length; i++) {
          let currPost = posts[i].data;
          arrayPosts.push(currPost);
        }
        this.setState({ ...this.state, listPosts: arrayPosts });
      })
      .catch(function (err) {
        console.log(err); // Log error if any
      });
  };

  handlePanel(e, titlepost, urlpost, selftextpost, authorpost) {
    this.setState({
      titlepost: titlepost,
      urlpost: urlpost,
      selftextpost: selftextpost,
      authorpost: authorpost,
    });
  }

  render() {
    const {
      listPosts,
      activeLink,
      titlepost,
      urlpost,
      selftextpost,
      authorpost,
    } = this.state;
    return listPosts.length ? (
      <div>
        <br></br>

        <React.Fragment>
          <h1>Selected Subreddit: '{this.state.selectedSubreddit.title}'</h1>
          <SideNav />
          <p class="junioursubreddit">
            Selected post panel: <br></br>
            <span class="section">{this.state.titlepost}</span> <br></br>
            <span class="section">{this.state.urlpost}</span>
            <br></br>
            <span class="section">{this.state.selftextpost}</span> <br></br>
            <span class="section">{this.state.authorpost}</span>
          </p>
        </React.Fragment>
        <div>
          {
            // <div>{listPosts.length}</div>
            listPosts.map((currPost, index) => {
              return (
                <div
                  onClick={() =>
                    this.handleClick(
                      currPost.title,
                      currPost.url,
                      currPost.selftext,
                      currPost.author
                    )
                  }
                  className={
                    currPost.title.className === activeLink
                      ? "sub"
                      : "" + (currPost.title === activeLink ? "sub " : "")
                  }
                >
                  <div
                    className="subreddit"
                    key={index}
                    onClick={(e) =>
                      this.handlePanel(
                        e,
                        currPost.title,
                        currPost.url,
                        currPost.selftext,
                        currPost.author
                      )
                    }
                  >
                    <div class="title">
                      {" "}
                      {currPost.title} {currPost.title === activeLink}{" "}
                    </div>
                    <div class="content">
                      {currPost.selftext}
                      <br></br>
                      <div>
                        <a href="/" target="_blank">
                          {currPost.url}
                        </a>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <img
                        src="https://i.redd.it/award_images/t5_22cerq/80j20o397jj41_NarwhalSalute.png"
                        onLoad={this.onImageLoad(currPost)}
                        class="image"
                      />
                    </div>
                    <br></br>
                    <div class="author"> Posted by {currPost.author} </div>
                    <br></br>

                    <div></div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}
export default App;
