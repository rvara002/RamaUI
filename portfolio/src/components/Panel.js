import React, { Component } from 'react';
import SideNav from './SideNav';
import "./App.css";
import PropTypes from 'prop-types';

 class  Panel extends Component {

 constructor(props){
     super(props);

 }    

render(){
    const {title, author, selftext, url } = this.props;
    console.log('panel comonent');
return(

    <div>
         <div>
                  <div class="title"> {title} </div>
                  <div class="content">
                    {selftext}
                    <span>${url}</span>
                  </div>
                  <div class="author"> Posted by {author} </div>
                </div>
    </div>

);

}
 }

Panel.propType = 
{title : PropTypes.string,
 author: PropTypes.string,
 url : PropTypes.string,
 selftext: PropTypes.string
}
export default Panel;