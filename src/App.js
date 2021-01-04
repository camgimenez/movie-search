import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import MovieSource from './api/MovieSource';

function App() {
  const [state, setState] = useState({
    results: []
  })

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "5d76f80" }
    });
    setState(prevState => {
      return { ...prevState, results: results }
    })

  }

  return (
    <div className="App">
      <div className="container__search">
        <h2 className="title is-2 has-text-centered">
          REACT Search using Context API and Hooks
       </h2>
        <SearchBar onSearch={onSearch} />
        <SearchList results={state.results} />
      </div>

    </div>
  );
}

export default App;
