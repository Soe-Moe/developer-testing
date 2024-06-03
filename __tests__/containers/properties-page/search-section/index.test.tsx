import { render } from '@testing-library/react';
import ProductsSearch from '@/containers/properties-page/search-section';

jest.mock('../../../../components/Forms/Inputs/Search', () => ({
    __esModule: true,
    default: () => <div data-testid="search-input" />
}));

describe('ProductsSearch component', () => {
    it('renders without errors', () => {
        render(<ProductsSearch />);
    });
});
