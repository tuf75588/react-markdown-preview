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
    this.postFBRef.on("value", (snapshot) => {
      if (!snapshot.val()) return;
      this.titleRef.current &&
        (this.titleRef.current.value = snapshot.val().title);
      this.bodyRef.current &&
        (this.bodyRef.current.value = snapshot.val().body);
      this.setState(() => ({
        content: snapshot.val().body
      }));
    });
  }
  handleChange = () => {
    this.postFBRef.set({
      title: this.titleRef.current.value,
      body: this.bodyRef.current.value
    });
  };
  render() {
    return (
      <>
        <div className='row'>
          <div className='col col-sm-12'>
            <Link to='/'>Home</Link>
          </div>
          <div className='col col-sm-12'>
            <input
              type='text'
              className='post-title-input'
              placeholder='Post Title'
              ref={this.titleRef}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-6'>
            <textarea
              className='form-control'
              ref={this.bodyRef}
              onChange={this.handleChange}
              rows={30}
              type='text'
            />
          </div>
          <div className='col col-sm-6'>
            <ReactMarkdown
              source={this.state.content}
              className='markdown-preview'
            />
          </div>
        </div>
      </>
    );
  }
}

export default Post;
