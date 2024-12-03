import {toArray} from "./index";

describe("Day 1 - toArray should convert the input to array ", () => {
    test("splitting by space", () => {
        expect(toArray("1 4")).toEqual([1, 4]);
        expect(toArray("5 9")).toEqual([5, 9]);
    });

    test("could be any number of spaces in between", () => {
        expect(toArray("1239    1239")).toEqual([1239, 1239]);
        expect(toArray("132     4")).toEqual([132, 4]);
        expect(toArray("1       4")).toEqual([1, 4]);
    });
});