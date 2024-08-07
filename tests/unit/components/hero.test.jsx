import { render, screen } from '@testing-library/react';
import Hero from '../../../components/homePage/hero'; // Ensure this path is correct
import '@testing-library/jest-dom';

// Mocking the content import with minimal necessary data
jest.mock('../../../jsonData/homePage/homeData.json', () => ({
    intro: {
        start: "const Kevin = ( name, passion ) =>",
        end: "Hello, my name is",
        speed: 60,
        deletionSpeed: 80,
        wrapper: "h2",
        startDelay: 1000,
        deleteDelay: 3000,
        restartDelay: 12000
    },
    header: {
        name: "Kevin Lin",
        usp: "I bring tech ideas to life."
    },
    paragraph: "I am a software engineer driven by curiosity, constantly exploring new code and innovative ideas to shape the future of technology.",
    buttons: {
        primary: {
            title: "Let's Connect!",
            url: "https://www.linkedin.com/in/linkevin19/",
            leaveSite: true
        }
    }
}));

describe('Hero section', () => {
    it('renders Hero component', () => {
        render(<Hero />);
        
        // Check for the main heading
        const mainHeading = screen.getByRole('heading', { name: /Kevin Lin/i });
        expect(mainHeading).toBeInTheDocument();

        // Check for the sub heading
        const subHeading = screen.getByRole('heading', { name: /I bring tech ideas to life./i });
        expect(subHeading).toBeInTheDocument();

        // Check for the paragraph
        const paragraph = screen.getByText(/software engineer/i);
        expect(paragraph).toBeInTheDocument();

        // Check for the button
        const button = screen.getByRole('button', { name: /Let's Connect!/i });
        expect(button).toBeInTheDocument();
    });
});
