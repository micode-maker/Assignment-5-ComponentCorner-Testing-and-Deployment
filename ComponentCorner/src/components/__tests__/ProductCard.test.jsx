import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Component',
    description: 'This is a test component.',
    price: '$9.99',
    image: 'https://via.placeholder.com/150',
  }

  const mockAddToCart = vi.fn()

  beforeEach(() => {
    mockAddToCart.mockClear() 
  })

  test('renders without crashing', () => {
    render(
      <ProductCard
        product={mockProduct}
        name={mockProduct.name}
        description={mockProduct.description}
        price={mockProduct.price}
        image={mockProduct.image}
        onAddToCart={mockAddToCart}
      />
    )
  })

  test('displays product name and price', () => {
    render(
      <ProductCard
        product={mockProduct}
        name={mockProduct.name}
        price={mockProduct.price}
        onAddToCart={mockAddToCart}
      />
    )

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
    expect(screen.getByText(mockProduct.price)).toBeInTheDocument()
  })

  test('calls onAddToCart when button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />)


    const button = screen.getByRole('button', { name: /add to cart/i })
    fireEvent.click(button)
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct)
  })
})
