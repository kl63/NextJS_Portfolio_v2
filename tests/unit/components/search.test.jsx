import { render, screen } from '@testing-library/react';
import ChromePage from '../../../components/chromePage/search'; // Adjust the import path as needed
import '@testing-library/jest-dom';

// Define a mock for the JSON data
jest.mock('../../../jsonData/chromePage/chromeData.json', () => [
  {
    name: "Motivational Quotes",
    quotes: ["Stay positive!", "Keep pushing forward!", "Believe in yourself!"]
  },
  {
    name: "Useful Links",
    url: "https://example.com"
  }
]);

describe('ChromePage component', () => {
  it('renders the search form', () => {
    render(<ChromePage />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    const searchButton = screen.getByRole('button', { name: /Google Search/i });
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('renders a random quote', () => {
    render(<ChromePage />);
    // Since quotes are mocked, this will check if one of the quotes is rendered
    const quote = screen.getByText(/Stay positive!|Keep pushing forward!|Believe in yourself!/i);
    expect(quote).toBeInTheDocument();
  });

  it('renders bookmarks list', () => {
    render(<ChromePage />);
    const bookmarkLink = screen.getByRole('link', { name: /Useful Links/i });
    expect(bookmarkLink).toBeInTheDocument();
  });
});
