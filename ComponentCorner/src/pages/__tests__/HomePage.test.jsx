import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
  })

  test('displays main content', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    // Hero text
    expect(
      screen.getByText('Welcome to ComponentCorner')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Discover amazing products and electronic components')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Shop Now!')
    ).toBeInTheDocument()

    // Benefits section
    expect(
      screen.getByText('Why Shop with Us?')
    ).toBeInTheDocument()

    expect(
      screen.getByText(/best products at unbeatable prices/i)
    ).toBeInTheDocument()
  })
})

