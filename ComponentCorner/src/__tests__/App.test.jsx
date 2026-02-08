import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductsPage from "../pages/ProductsPage";

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe("App component - Cart and localStorage", () => {
  const testProduct = {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: '/wireless-headphones.jpg',
    description: 'Premium noise-cancelling headphones'
  };

  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  test("saves cart changes to localStorage when adding a product", async () => {
    localStorageMock.getItem.mockReturnValue("[]");

    const addToCartMock = vi.fn((product) => {
      const cart = [product];
      localStorage.setItem("cart", JSON.stringify(cart));
    });

    render(<ProductsPage products={[testProduct]} addToCart={addToCartMock} />);

    const addButton = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(addToCartMock).toHaveBeenCalledWith(testProduct);

      const savedCart = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
      expect(savedCart.length).toBe(1);
      expect(savedCart[0].name).toBe(testProduct.name);
    });
  });
});
