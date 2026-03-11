import { render, screen, fireEvent } from '@testing-library/react';
import Insights from '@/app/insights/page';

describe('Insights Page', () => {
    it('renders pagination buttons and allows clicks', async () => {
        // Insights page is an async component, but we can wait for it to resolve
        const Component = await Insights();
        render(Component);

        // Find pagination buttons
        const btn1 = screen.getByRole('button', { name: '1' });
        const btn2 = screen.getByRole('button', { name: '2' });
        const btn3 = screen.getByRole('button', { name: '3' });
        const btn12 = screen.getByRole('button', { name: '12' });

        expect(btn1).toBeInTheDocument();
        expect(btn2).toBeInTheDocument();
        expect(btn3).toBeInTheDocument();
        expect(btn12).toBeInTheDocument();

        // Fire click events to ensure they are intractable
        fireEvent.click(btn2);
        fireEvent.click(btn3);
        fireEvent.click(btn12);

        // Since there is no state hooked up to these buttons currently, 
        // we just verify they render and don't cause errors on click
    });
});
