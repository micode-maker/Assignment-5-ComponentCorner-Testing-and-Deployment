import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../CartItem";

describe('CartItem component', () => {
  const mockRemove = vi.fn();
  const item = {
    id: 1,
    name: "Test Component",
    price: 2.99
  };

  beforeEach(() => {
    mockRemove.mockClear();
  });

  test('renders without crashing', () => {
    render(<CartItem {...item} onRemove={mockRemove} />);
  });

  test('displays item information correctly', () => {
    render(<CartItem {...item} onRemove={mockRemove} />);
    
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(`$${item.price}`)).toBeInTheDocument();
  });

  test('calls onRemove when "Remove" button is clicked', () => {
    render(<CartItem {...item} onRemove={mockRemove} />);

    const button = screen.getByText(/Remove/i);
    fireEvent.click(button);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(item.id);
  });
});
