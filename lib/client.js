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
      coverImageUrl
    }
  }
`;

export function findAllBooks() {
  return client.query({
    query: query_all_books
  });
}
