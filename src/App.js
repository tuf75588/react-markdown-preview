import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Post from "./components/Post";
import List from "./components/List";

import Home from "./components/Home";
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post/:postId' component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
