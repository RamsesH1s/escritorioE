import { render, screen, fireEvent, within } from '@testing-library/react';
import Header from '@/components/Header';
import { MAIN_NAVIGATION, OFFICE_INFO } from '@/lib/constants/navigation';

describe('Header Component', () => {
    it('renders the logo image', () => {
        render(<Header />);
        const logo = screen.getByAltText(/Dayra Oliveira Advogada e Consultora Jurídica Logo/i);
        expect(logo).toBeInTheDocument();
    });

    it('renders desktop navigation links', () => {
        render(<Header />);
        const nav = screen.getByRole('navigation');

        MAIN_NAVIGATION.forEach((item) => {
            const link = within(nav).getByRole('link', { name: new RegExp(item.label, 'i') });
            expect(link).toHaveAttribute('href', item.href);
        });
    });

    it('renders the Book Consultation button', () => {
        render(<Header />);
        const bookButton = screen.getAllByText(/Agendar Consulta/i)[0];
        expect(bookButton).toBeInTheDocument();
    });
});
