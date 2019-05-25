import React, { useContext } from "react";
import { Row, Col } from "react-flexbox-grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { BooksContext, add } from "../context/books";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    minWidth: 140
  },
  buttons: {
    margin: 10
  }
});

const Book = ({ book }) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(BooksContext);
  const isInReadList = state.read.has(book.id);
  const addToReadList = () => {
    dispatch(add(book.id));
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={book.coverImageUrl}
        title={book.title}
      />
      <div className={classes.details}>
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
          >
            {book.author}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
            {book.synopsis.substring(0, 500)} ...
          </Typography>
        </CardContent>
        <Divider />
        <Row end="xs">
          <Button
            className={classes.buttons}
            variant="outlined"
            onClick={addToReadList}
            disabled={isInReadList}
          >
            Agregar
          </Button>
        </Row>
      </div>
    </Card>
  );
};

export default Book;
