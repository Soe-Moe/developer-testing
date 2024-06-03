import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from '@/containers/home-page/hero-section/index';

// Mock dependencies
jest.mock('../../../../components/Forms/Inputs/MobileSearch/index.tsx', () => ({
  __esModule: true,
  default: () => <div data-testid="mobile-search-input" />
}));
jest.mock('../../../../components/Forms/Inputs/Search/index.tsx', () => ({
  __esModule: true,
  default: () => <div data-testid="search-input" />
}));

describe('HeroSection', () => {
  it('Renders without crashing', () => {
    render(<HeroSection />);
  });
});
