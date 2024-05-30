import { gql } from '@apollo/client';

const GET_PROPERTY = gql`
  query Property($propertyId: String) {
    property(id: $propertyId) {
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
`;

export default GET_PROPERTY;