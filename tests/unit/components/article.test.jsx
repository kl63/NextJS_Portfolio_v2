import { render, screen } from '@testing-library/react';
import Articles from '../../../components/articles/articles'; // Adjust the import path as needed
import '@testing-library/jest-dom';

// Mocking next/image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, width, height }) => (
        <img src={src} alt={alt} width={width} height={height} />
    ),
}));

// Mocking Font Awesome icons
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: () => <span>icon</span>,
}));

it('renders Articles component with key texts', () => {
    const mockMediumArticles = {
        feed: {},
        items: [], // No articles needed for this test
    };

    render(<Articles mediumArticles={mockMediumArticles} />);

    // Check if SectionTitle component displays correct text
    expect(screen.getByText(/Recent Articles/i)).toBeInTheDocument();
    expect(screen.getByText(/Informative/i)).toBeInTheDocument();
    expect(screen.getByText(/A personal quest to become a better creative writer./i)).toBeInTheDocument();
});
