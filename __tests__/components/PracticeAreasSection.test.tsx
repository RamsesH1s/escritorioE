import { render, screen } from '@testing-library/react';
import PracticeAreasSection from '@/components/PracticeAreasSection';
import { PRACTICE_AREAS } from '@/lib/constants/practices';

describe('PracticeAreasSection Component', () => {
    it('renders the section header and link', () => {
        render(<PracticeAreasSection />);
        expect(screen.getByRole('heading', { level: 2, name: /Áreas de Atuação/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Ver Todas as Áreas/i })).toBeInTheDocument();
    });

    it('renders all practice area cards', () => {
        render(<PracticeAreasSection />);
        const cardTitles = screen.getAllByRole('heading', { level: 3 });
        expect(cardTitles).toHaveLength(PRACTICE_AREAS.length);

        PRACTICE_AREAS.forEach(area => {
            expect(screen.getByText(new RegExp(area.title, 'i'))).toBeInTheDocument();
        });
    });
});
