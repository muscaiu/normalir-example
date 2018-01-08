import React, { Component } from 'react';
import { normalize, schema } from 'normalizr'

import logo from './logo.svg';
import './App.css';
import { blogPost } from './originalData'

class App extends Component {

  render() {
    const user = new schema.Entity('users');
    const comment = new schema.Entity('comments', { commenter: user });
    const article = new schema.Entity('articles', {
      author: user,
      comments: [comment]
    });

    const normalizedData = normalize(blogPost, article);
    let { entities } = normalizedData
    console.log('users', entities.users)
    console.log('comments', entities.comments)
    console.log('articles', entities.articles)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
