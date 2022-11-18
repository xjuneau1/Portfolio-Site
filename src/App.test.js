import { render, screen } from '@testing-library/react';
import App from './App';


describe("button component", ()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('has text on page', async ()=>{
    render(<App/>)
    const text = screen.getByText(/edit/i)
    expect(text).toBeInTheDocument();
  })
})