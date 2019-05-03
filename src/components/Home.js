import React from "react";
import List from "./List";
import uuidv4 from "uuid/v4";
import db from "../firebase";
class Home extends React.Component {
  state = {
    title: "",
    posts: []
  };
  componentDidMount() {
    db.ref("/posts").on("value", (snapshot) => {
      let posts = [];
      snapshot.forEach((childSnapshot) => {
        posts.push({ ...childSnapshot.val(), key: childSnapshot.key });
      });
      this.setState({ posts });
    });
  }
  componentWillUnmount() {
    this.setState({ title: "" });
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const newId = uuidv4();
    const { title } = this.state;

    if (title === "") return;
    db.ref(`/posts/${newId}`)
      .set({ title, body: "" })
      .then((data) => {
        this.props.history.push(`/post/${newId}`);
      });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleDelete = (key) => {
    // find our db reference
    const refKey = db.ref(`/posts/${key}`);
    refKey.remove().then(() => {
      console.log("remove succeeded");
    });
  };
  render() {
    return (
      <div>
        <h1 className='text-center mt-5'>Create or edit a post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='input-group mb-3'>
            <input
              type='text'
              name='title'
              className='form-control'
              onChange={this.handleChange}
              value={this.state.title}
              placeholder='Post title'
            />
            <div className='input-group-append'>
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
        <hr />
        <h2 style={{ fontWeight: 300 }} className='text-center'>
          Posts
        </h2>
        {this.state.posts.map((post) => (
          <List
            post={post}
            key={post.key}
            onDelete={() => this.handleDelete(post.key)}
          />
        ))}
      </div>
    );
  }
}
export default Home;
