import React from "react";
import ReactMarkdown from "react-markdown";
import db from "../firebase";
import { Link } from "react-router-dom";

class Post extends React.Component {
  titleRef = React.createRef();
  bodyRef = React.createRef();
  postFBRef = db.ref(`/posts/${this.props.match.params.postId}`);
  state = {
    content: ""
  };
  componentDidMount() {
    console.log(this.postFBRef);
  }
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <form action='' className='rows'>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>
              Example textarea
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>
              Example textarea
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
