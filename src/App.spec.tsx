
import { render, screen } from '@testing-library/react';
import { Pricing } from './components/Pricing';

// import App from './App';

// test('Navbar', () => {
//     render(<App />);
//     const linkElement = screen.getByText('About');
//     expect(linkElement).toBeDefined();
// });

test('Pricing', () => {
    render(<Pricing />);
    const linkElement = screen.getByText('Most popular');
    expect(linkElement).toBeDefined();
});
