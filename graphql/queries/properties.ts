import { gql } from '@apollo/client';

const GET_PROPERTIES = gql`
  query Query($first: Int, $after: String, $type: String, $sort: String) {
    properties(first: $first, after: $after, type: $type, sort: $sort) {
      edges {
        cursor
        node {
          id
          name
          title
          description
          bedroom
          area
          price
          thumbnail
          type
          propertyType
          gallery {
            id
            url
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export default GET_PROPERTIES;