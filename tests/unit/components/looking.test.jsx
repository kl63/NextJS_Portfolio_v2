import { render, screen } from '@testing-library/react';
import Looking from '../../../components/homePage/looking'; // Adjust the import path as needed
import '@testing-library/jest-dom';

describe('Looking component', () => {
  it('renders the Looking section with correct text', () => {
    render(<Looking />);

    // Check that the text is rendered correctly
    expect(screen.getByText("I'm currently a")).toBeInTheDocument();
    expect(screen.getByText("Metlife: {")).toBeInTheDocument();
    expect(screen.getByText("Product Development Intern")).toBeInTheDocument();
    expect(screen.getByText("}")).toBeInTheDocument();
    expect(screen.getByText("I am particularly interested in roles where I can contribute to organization-wide initiatives.")).toBeInTheDocument();
  });
});
