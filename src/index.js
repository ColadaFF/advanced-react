import React from "react";
import ReactDOM from "react-dom";
import BookList from "./components/book-list";

const App = () => {
  return <BookList />;
};

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
