import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import BookList from "./components/book-list";
import NavBar from "./components/nav-bar";
import { SearchProvider } from "./context/search";
import { BooksProvider } from "./context/books";

const App = () => {
  return (
    <BooksProvider>
      <SearchProvider>
        <NavBar />
        <BookList />
      </SearchProvider>
    </BooksProvider>
  );
};

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
