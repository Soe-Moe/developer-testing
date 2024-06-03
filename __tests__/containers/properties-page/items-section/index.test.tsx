import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import PropertiesItems from '@/containers/properties-page/items-section';
import GET_PROPERTIES from '@/graphql/queries/properties';

// Mock the GraphQL query
const mocks = [
    {
        request: {
            query: GET_PROPERTIES,
            variables: {
                first: 12,
                after: null,
                type: 'RENT',
                sort: undefined,
            },
        },
        result: {
            data: {
                properties: {
                    __typename: 'PropertiesConnection',
                    edges: [],
                    pageInfo: {
                        startCursor: '',
                        endCursor: '',
                        hasNextPage: false,
                        hasPreviousPage: false,
                    },
                },
            },
        },
    },
];

describe('PropertiesItems component', () => {
    it('renders without errors', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PropertiesItems type="RENT" sort={undefined} />
            </MockedProvider>
        );
    });
});
