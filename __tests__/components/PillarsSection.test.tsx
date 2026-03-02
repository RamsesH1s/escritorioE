import { render, screen } from '@testing-library/react';
import PillarsSection from '@/components/PillarsSection';

describe('PillarsSection Component', () => {
    it('renders the main section title', () => {
        render(<PillarsSection />);
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toHaveTextContent(/The Three Pillars/i);
    });

    it('renders three distinct pillars with icons', () => {
        render(<PillarsSection />);
        const pillarsHeadings = screen.getAllByRole('heading', { level: 3 });
        expect(pillarsHeadings).toHaveLength(3);

        expect(pillarsHeadings[0]).toHaveTextContent(/Experience/i);
        expect(pillarsHeadings[1]).toHaveTextContent(/Integrity/i);
        expect(pillarsHeadings[2]).toHaveTextContent(/Results/i);
    });
});
