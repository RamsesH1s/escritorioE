import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '@/app/contact/page';

// Mock window.open
const mockOpen = jest.fn();
global.window.open = mockOpen;

describe('Contact Page', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockOpen.mockClear();
    });

    it('renders the contact form inputs and buttons', () => {
        render(<Contact />);

        expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument();
        // The email field is gone now
        // Find the select by its label text
        expect(screen.getByLabelText(/Qual é o assunto do seu problema/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Como podemos ajudá-lo\?/i)).toBeInTheDocument();

        expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Como Chegar/i })).toBeInTheDocument();
    });

    it('allows typing into the form fields', () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText(/John Doe/i);
        const subjectSelect = screen.getByLabelText(/Qual é o assunto do seu problema/i);
        const messageInput = screen.getByPlaceholderText(/Como podemos ajudá-lo\?/i);

        fireEvent.change(nameInput, { target: { value: 'Alice' } });
        fireEvent.change(subjectSelect, { target: { value: 'Direito Trabalhista' } });
        fireEvent.change(messageInput, { target: { value: 'Test message body' } });

        expect(nameInput).toHaveValue('Alice');
        expect(subjectSelect).toHaveValue('Direito Trabalhista');
        expect(messageInput).toHaveValue('Test message body');
    });

    it('submits the form successfully', async () => {
        render(<Contact />);

        const nameInput = screen.getByPlaceholderText(/John Doe/i);
        const subjectSelect = screen.getByLabelText(/Qual é o assunto do seu problema/i);
        const messageInput = screen.getByPlaceholderText(/Como podemos ajudá-lo\?/i);
        const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

        fireEvent.change(nameInput, { target: { value: 'Bob' } });
        fireEvent.change(subjectSelect, { target: { value: 'Direito Civil' } });
        fireEvent.change(messageInput, { target: { value: 'Important inquiry' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Redirecionando para o WhatsApp...')).toBeInTheDocument();
        });

        expect(mockOpen).toHaveBeenCalledWith(
            expect.stringContaining('https://wa.me/558694404644?text='),
            '_blank'
        );
    });
});
