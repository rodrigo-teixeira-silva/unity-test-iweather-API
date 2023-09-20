import { getNextDays } from "./getNextDays";

describe("getNextDays", () =>{
    it("shoud be return next five days", () => {
        const days = getNextDays(); 

        expect(days.length).toBe(5);
    });
});