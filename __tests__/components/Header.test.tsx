import { render, screen, fireEvent, within } from '@testing-library/react';
import Header from '@/components/Header';
import { MAIN_NAVIGATION, OFFICE_INFO } from '@/lib/constants/navigation';

describe('Header Component', () => {
    it('renders the logo and office name', () => {
        render(<Header />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent(OFFICE_INFO.name);
    });

    it('renders desktop navigation links', () => {
        render(<Header />);
        const nav = screen.getByRole('navigation');

        MAIN_NAVIGATION.forEach((item) => {
            const link = within(nav).getByRole('link', { name: new RegExp(item.label, 'i') });
            expect(link).toHaveAttribute('href', item.href);
        });
    });

    it('renders the search input and Book Consultation button', () => {
        render(<Header />);
        const searchInput = screen.getByPlaceholderText(/Buscar artigos/i);
        const bookButton = screen.getAllByText(/Agendar Consulta/i)[0];

        expect(searchInput).toBeInTheDocument();
        expect(bookButton).toBeInTheDocument();
    });
});
