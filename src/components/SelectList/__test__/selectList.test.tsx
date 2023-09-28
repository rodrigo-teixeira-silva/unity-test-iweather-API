import {render, screen, fireEvent} from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
    it("should be return city details selected", () => {
        const data = [
            { id: '1', name: 'manaus', longitude: 123, latitude: 456},
            { id: '2', name: 'rio de janeiro', longitude: 789, latitude: 101112}
        ];

        const onPress = jest.fn();

        render(
            <SelectList
                data={data}
                onChange={() => {}}
                onPress={onPress}
            />

    );
        const selectedCity = screen.getByText(/rio/i);
        fireEvent.press(selectedCity);

        expect(onPress).toBeCalledWith(data[1]);
    
    });

    it("not shoukd be show options when data is empty.",() => {
        render(
            <SelectList 
            data={[]}
            onChange={() => {}}
            onPress={() => {}}
            />
        );
        const options = screen.getByTestId('options');
        expect(options.children).toHaveLength(0);
    });
});