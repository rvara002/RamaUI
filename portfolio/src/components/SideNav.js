import React from "react";
import "../styles/sideNav.css";
import { subscriber, messageService } from "../messageService";

class SideNav extends React.Component {
  constructor() {
    super();
    this.state = {
      state: {
        showNav: false,
      },
      listSubreddit: [],
      activeLink: null,
      selftextpost: "",
      searchText: null,
    };
    this.renderPosts = this.renderPosts.bind(this);
    this.searchPosts = this.searchPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick = (id) => {
    this.setState({ activeLink: id });
  };

  componentDidMount() {
    this.renderPosts();
  }

  openNavClick = (e) => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = (e) => {
    e.preventDefault();
    this.closeNav();
  };

  renderPosts = () => {
    fetch(`https://www.reddit.com/subreddits/popular.json`)
      .then((res) => {
        // Return the response in JSON format
        return res.json();
      })
      .then((res) => {
        const posts = res.data.children;
        let arraySubreddit = [];

        for (let i = 0; i < posts.length; i++) {
          let currPost = posts[i].data;
          arraySubreddit.push(currPost);
        }

        this.setState({ ...this.state, listSubreddit: arraySubreddit });
      })
      .catch(function (err) {
        console.log(err); // Log error if any
      });
  };

  openNav = () => {
    this.setState({
      showNav: true,
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false,
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = (e) => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  searchPosts() {
    //search subreddit based on user entered input
    if (this.state.searchText == null) {
      return;
    } else {
      fetch(
        `https://www.reddit.com/subreddits/search.json?q=${this.state.searchText}
      `
      )
        .then((res) => {
          // Return the response in JSON format
          return res.json();
        })
        .then((res) => {
          const posts = res.data.children;
          let arraySubreddit = [];
          for (let i = 0; i < posts.length; i++) {
            let currPost = posts[i].data;
            arraySubreddit.push(currPost);
          }

          this.setState({ ...this.state, listSubreddit: arraySubreddit });
        })
        .catch(function (err) {
          console.log(err); // Log error if any
        });
    }
  }
  render() {
    const { listSubreddit } = this.state;
    const { showNav } = this.state;
    const { activeLink } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "500px" : "0" };

    return (
      <div>
        <React.Fragment>
          <span onClick={this.openNavClick} class="open-nav">
            &#9776; Click to select a Subreddit
          </span>

          <div
            onClick={this.navCoverClick}
            class="nav-cover"
            style={navCoverStyle}
          />
          <div name="side-nav" class="side-nav" style={sideNavStyle}>
            <a href="#" onClick={this.closeNavClick} class="close-nav">
              &times;
            </a>
            <div>List of Subreddit's</div>
            <input
              onChange={this.handleChange}
              value={this.state.searchText}
              type="text"
              name="searchText"
            ></input>
            <button onClick={this.searchPosts}>Search</button>
            <div>
              {listSubreddit.map((currPost, index) => {
                return (
                  <div
                    class="subredditlist"
                    onClick={(e) =>
                      subscriber.next({
                        title: currPost.title,
                        url: currPost.url,
                      })
                    }
                    key={index}
                  >
                    <div
                      onClick={() => this.handleClick(currPost.title)}
                      className={
                        currPost.title.className === activeLink
                          ? "sub"
                          : "" + (currPost.title === activeLink ? "sub " : "")
                      }
                    >
                      {currPost.title} {currPost.title === activeLink}{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default SideNav;
