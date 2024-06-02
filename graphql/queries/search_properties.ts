import { gql } from '@apollo/client';

const GET_SEARCH_PROPERTIES = gql`
  query Query(
    $first: Int
    $after: String
    $search_keyword: String
    $sort: String
    $price_range: String
    $area_range: String
    $type: String
    $property_type: String,
    $bedroom: Int
  ) {
    properties(
      first: $first
      after: $after
      search_keyword: $search_keyword
      sort: $sort
      price_range: $price_range
      area_range: $area_range
      type: $type
      property_type: $property_type,
      bedroom: $bedroom
    ) {
      totalCount
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

export default GET_SEARCH_PROPERTIES;