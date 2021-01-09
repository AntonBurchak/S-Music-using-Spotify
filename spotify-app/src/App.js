import React from 'react';
import Header from "./components/header";
import SearchBar from "./components/search-bar";
import MainContainer from "./components/main-container";

import CategoryItems from "./components/category-items-wrapper";
import './App.scss'


function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
          <SearchBar />
          <CategoryItems />
      </MainContainer>
    </div>
  );
}

export default App;
