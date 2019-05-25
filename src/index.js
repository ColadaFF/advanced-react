import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import BookList from "./components/book-list";
import NavBar from "./components/nav-bar";
import SearchContext from "./context/search";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      <NavBar />
      <BookList />
    </SearchContext.Provider>
  );
};

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
