import { render, screen } from '@testing-library/react';
import App from '../App';


describe("the page header", ()=>{
    test("should display a Home button", ()=>{
        render(<App />)
        const homeBtn = screen.getByRole("link", {name: "Home"})
        expect(homeBtn).toBeDefined()
    })
    test("should display a Projects button", ()=>{
        render(<App />)
        const projectsBtn = screen.getByRole("link", {name: "Projects"})
        expect(projectsBtn).toBeDefined()
    })
    test("should display an About button", ()=>{
        render(<App />)
        const aboutBtn = screen.getByRole("link", {name: "About Me"})
        expect(aboutBtn).toBeDefined()
    })
})