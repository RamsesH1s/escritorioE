import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/HeroSection';

describe('HeroSection', () => {
    it('renders the main heading', () => {
        render(<HeroSection />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    });

    it('renders the call to action buttons', () => {
        render(<HeroSection />);
        const scheduleButton = screen.getByText(/Agende uma Reunião/i);
        const practicesButton = screen.getByText(/Áreas de Atuação/i);

        expect(scheduleButton).toBeInTheDocument();
        expect(practicesButton).toBeInTheDocument();
    });
});
