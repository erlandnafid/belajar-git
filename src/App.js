import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({ posts: res.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const post = this.state.posts.map((post, index) => 
      <li key={index}>{post.title}</li>
    )

    return (
      <div className="App">
        <h1>React</h1>
        <ul>
          { post }
        </ul>
      </div>
    );
  }
}

export default App;
