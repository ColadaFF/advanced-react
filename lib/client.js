import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://3.81.158.44:4000/"
});

const query_all_books = gql`
  query allBooks {
    findAllBooks {
      id
      title
      author
      coverImageUrl
      synopsis
    }
  }
`;

const query_search_books = gql`
  query search($text: String!) {
    searchBook(text: $text) {
      id
      title
      author
      coverImageUrl
      synopsis
    }
  }
`;

export function findAllBooks() {
  return client
    .query({
      query: query_all_books
    })
    .then(formatResponse("findAllBooks"))
    .catch(formatError("findAllBooks"));
}

export function searchBooks(text) {
  return client
    .query({
      query: query_search_books,
      variables: {
        text
      }
    })
    .then(formatResponse("searchBook"))
    .catch(formatError("searchBook"));
}

const formatResponse = queryName => response => {
  return {
    loading: false,
    data: response.data[queryName],
    error: null
  };
};

const formatError = queryName => error => {
  return {
    loading: false,
    data: [],
    error
  };
};
