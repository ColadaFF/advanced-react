import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import BookList from "./components/book-list";
import NavBar from "./components/nav-bar";
import SearchContext from "./context/search";
import { BooksProvider } from "./context/books";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <BooksProvider>
      <SearchContext.Provider value={{ value, setValue }}>
        <NavBar />
        <BookList />
      </SearchContext.Provider>
    </BooksProvider>
  );
};

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
