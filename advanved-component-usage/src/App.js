import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/Posts';

class App extends Component {
  state = {
    posts: [],
    loading: true
  };

	componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(posts => posts.data)
      .then(posts => {
        setTimeout(() => {
					this.setState({
						posts,
						loading: false
					});
        }, 2000)
      })
	}

	render() {
    return (
      <div className="App">
				<Posts {...this.state} />
      </div>
    );
  }
}

export default App;
