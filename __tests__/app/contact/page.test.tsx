import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '@/app/contact/page';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Mensagem enviada com sucesso!' }),
    })
) as jest.Mock;

describe('Contact Page', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the contact form inputs and buttons', () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/john@example.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Consulta Jurídica - Direito Societário/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Como podemos ajudá-lo\?/i)).toBeInTheDocument();

        expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Como Chegar/i })).toBeInTheDocument();
    });

    it('allows typing into the form fields', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText(/John Doe/i);
        const emailInput = screen.getByPlaceholderText(/john@example.com/i);
        const subjectInput = screen.getByPlaceholderText(/Consulta Jurídica/i);
        const messageInput = screen.getByPlaceholderText(/Como podemos ajudá-lo\?/i);

        fireEvent.change(nameInput, { target: { value: 'Alice' } });
        fireEvent.change(emailInput, { target: { value: 'alice@example.com' } });
        fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
        fireEvent.change(messageInput, { target: { value: 'Test message body' } });

        expect(nameInput).toHaveValue('Alice');
        expect(emailInput).toHaveValue('alice@example.com');
        expect(subjectInput).toHaveValue('Test Subject');
        expect(messageInput).toHaveValue('Test message body');
    });

    it('submits the form successfully', async () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText(/John Doe/i);
        const emailInput = screen.getByPlaceholderText(/john@example.com/i);
        const messageInput = screen.getByPlaceholderText(/Como podemos ajudá-lo\?/i);
        const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

        fireEvent.change(nameInput, { target: { value: 'Bob' } });
        fireEvent.change(emailInput, { target: { value: 'bob@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Important inquiry' } });

        fireEvent.click(submitButton);

        expect(submitButton).toBeDisabled();
        expect(submitButton).toHaveTextContent(/Enviando.../i);

        await waitFor(() => {
            expect(screen.getByText('Mensagem enviada com sucesso!')).toBeInTheDocument();
        });

        expect(global.fetch).toHaveBeenCalledWith('/backend-api/api/contact.php', expect.objectContaining({
            method: 'POST',
        }));
    });
});
