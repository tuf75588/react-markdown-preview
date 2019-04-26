import React from "react";
import marked from "marked";
class App extends React.Component {
  state = {
    content: "# Type some markdown here!"
  };
  rawMarkup = () => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    let rawMarkup = marked(this.state.content, { sanitize: true });
    return {
      __html: rawMarkup
    };
  };
  handleMarkDownChange = (event) => {
    this.setState({ content: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <h1 className='header'>React Markdown Previewer</h1>
        <div className='container'>
          <div className='markdown-editor'>
            <textarea
              defaultValue={this.state.content}
              onChange={this.handleMarkDownChange}
            />
          </div>
          <div className='output' dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
