import { render } from '@testing-library/react';
import ProductsHero from '@/containers/properties-page/properties-hero';

describe('ProductsHero component', () => {
    it('renders without errors', () => {
        render(<ProductsHero title="Sample Title" description="Sample Description" />);
    });
});