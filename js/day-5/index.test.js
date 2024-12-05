import {createRule} from "./index.js";

describe("Day 5", () => {
    describe("createRule", () => {
        test("should split by pipe", () => {
           expect(createRule("47|53")).toEqual([47, 53]);
        });
    });
});