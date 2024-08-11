import { render, screen, waitFor } from "./utils/test-utils";
import App from "./App";

describe("App Component", () => {
  test("renders App component and checks for TodoComp", async () => {
    render(<App />);

    // Global styles and App container should be rendered
    expect(screen.getByTestId("app-container")).toBeInTheDocument();

    // TodoComp component should be rendered
    await waitFor(() => {
      expect(screen.getByText(/items left/i)).toBeInTheDocument();
    });
  });
});
