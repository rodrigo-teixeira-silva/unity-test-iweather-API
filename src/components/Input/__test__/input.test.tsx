import { render, screen } from "@testing-library/react-native";

import { Input } from "@components/Input"

describe("Component: Input", () => {

  it("should  be render without activity indicator if isLoading prop is undefined", () => {
//    const { debug } = render(<Input />); para visualizar tudo que renderizado no componente.
  render(<Input />);
//  debug();

//  const activityIndicator = screen.getByTestId("activity-indicator"); retorna uma excessão um erro
    const activityIndicator = screen.queryByTestId("activity-indicator");    
      expect(activityIndicator).toBeNull();
  });

  it("should  be render with activity indicator if isLoading prop es true.", () => {
    render(<Input isLoading/>);

  const activityIndicator = screen.queryByTestId("activity-indicator"); 
    expect(activityIndicator).toBeTruthy();

  });
});