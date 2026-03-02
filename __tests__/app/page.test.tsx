import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the child components to isolate the page test
jest.mock('@/components/HeroSection', () => {
    return function MockHeroSection() {
        return <div data-testid="hero-section">Hero Section Mock</div>;
    };
});

jest.mock('@/components/PillarsSection', () => {
    return function MockPillarsSection() {
        return <div data-testid="pillars-section">Pillars Section Mock</div>;
    };
});

jest.mock('@/components/PracticeAreasSection', () => {
    return function MockPracticeAreasSection() {
        return <div data-testid="practice-areas-section">Practice Areas Section Mock</div>;
    };
});

describe('Home Page', () => {
    it('renders all sections on the main page', () => {
        render(<Home />);

        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
        expect(screen.getByTestId('pillars-section')).toBeInTheDocument();
        expect(screen.getByTestId('practice-areas-section')).toBeInTheDocument();
    });
});
