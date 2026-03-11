import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import { OFFICE_INFO, FOOTER_LINKS } from '@/lib/constants/navigation';

describe('Footer Component', () => {
    it('renders office information', () => {
        render(<Footer />);
        expect(screen.getAllByText(new RegExp(OFFICE_INFO.name, 'i')).length).toBeGreaterThan(0);
        expect(screen.getByText(OFFICE_INFO.phone)).toBeInTheDocument();
    });

    it('renders quick links', () => {
        render(<Footer />);
        FOOTER_LINKS.quickLinks.forEach(link => {
            expect(screen.getByRole('link', { name: new RegExp(link.label, 'i') })).toBeInTheDocument();
        });
    });
});
