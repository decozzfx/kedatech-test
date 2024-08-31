import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import LoginModal from './components/ui/modal'

describe('App ', () => {
    it('Navbar', () => {
        render(<App />)
        expect(screen.findAllByAltText("About")).toBeDefined();
        expect(screen.getByText("Pricing")).toBeDefined();
        expect(screen.getByText("Contact")).toBeDefined();
    })

    it('Hero', () => {
        const { queryAllByText } = render(<App />)
        expect(screen.getByText("ERP")).toBeDefined();
        const image = queryAllByText('hero-card-img');
        expect(image).toBeDefined();
    })

    it('About', () => {
        const { getByTestId } = render(<App />)
        expect(getByTestId('about')).toBeDefined();
    })

    it('Pricing', () => {
        const { getByTestId } = render(<App />)
        expect(getByTestId('pricing')).toBeDefined();
    })

    it('Contact', () => {
        const { getByTestId } = render(<App />)
        expect(getByTestId('contact')).toBeDefined();
    })

    it('Footer', () => {
        const { getByTestId } = render(<App />)
        expect(getByTestId('footer')).toBeDefined();
    })

    it('Login', () => {
        const { getByTestId } = render(<App />)

        const loginButton = getByTestId('login-button');

        fireEvent.click(loginButton);

        expect(LoginModal).toBeDefined();
    })
})