import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsletterForm from '@/components/NewsletterForm';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Inscrito com sucesso!' }),
    })
) as jest.Mock;

describe('NewsletterForm Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the footer variant input and button', () => {
        render(<NewsletterForm variant="footer" />);
        expect(screen.getByPlaceholderText(/Endereço de E-mail/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders the sidebar variant input and button', () => {
        render(<NewsletterForm variant="sidebar" />);
        expect(screen.getByPlaceholderText(/Endereço de e-mail/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Inscreva-se Agora/i })).toBeInTheDocument();
    });

    it('allows typing into the input field', () => {
        render(<NewsletterForm variant="sidebar" />);
        const input = screen.getByPlaceholderText(/Endereço de e-mail/i);
        fireEvent.change(input, { target: { value: 'test@example.com' } });
        expect(input).toHaveValue('test@example.com');
    });

    it('submits the form and displays success message', async () => {
        render(<NewsletterForm variant="sidebar" />);
        const input = screen.getByPlaceholderText(/Endereço de e-mail/i);
        const button = screen.getByRole('button', { name: /Inscreva-se Agora/i });

        fireEvent.change(input, { target: { value: 'test@example.com' } });
        fireEvent.click(button);

        expect(button).toBeDisabled();
        expect(button).toHaveTextContent(/Inscrevendo.../i);

        await waitFor(() => {
            expect(screen.getByText('Inscrito com sucesso!')).toBeInTheDocument();
        });

        expect(global.fetch).toHaveBeenCalledWith('/backend-api/api/newsletter.php', expect.any(Object));
    });
});
