import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import BookIcon from "@material-ui/icons/Book";

import { BooksContext } from "../context/books";

const ReadCounter = () => {
  const { state } = useContext(BooksContext);
  return (
    <Badge badgeContent={state.read.size} color="secondary">
      <BookIcon />
    </Badge>
  );
};

export default ReadCounter;
