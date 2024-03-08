import { render, screen } from '@testing-library/react';
import Hero from '../../../components/sections/index/hero';
import '@testing-library/jest-dom';

describe('Hero section parts', () => {
    it('renders main heading', () => {
        render(<Hero />);
        
        const heading = screen.getByRole('heading', {
            name: /Kevin Lin/i,
        });
        
        expect(heading).toBeInTheDocument();
    });

    it('renders sub heading', () => {
        render(<Hero />);
        
        const subHeading = screen.getByRole('heading', {
            level: 2, // Assuming subheading is an <h2> element
        });
        
        expect(subHeading).toBeInTheDocument();
    });
});
