import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import BookList from "./components/book-list";
import NavBar from "./components/nav-bar";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <BookList />
    </Fragment>
  );
};

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
