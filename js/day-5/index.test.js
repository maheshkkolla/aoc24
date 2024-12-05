import {createRule, createRules} from "./index.js";

describe("Day 5", () => {
    describe("createRules", () => {
        test("should split by pipe", () => {
           expect(createRule("47|53")).toEqual([47, 53]);
        });

        test("should create list of rules", () => {
            let input = "47|53\n" + "97|13\n" + "97|61\n" + "97|47\n" + "75|29\n" + "61|13";
           expect(createRules(input)).toEqual([
               [47, 53],
               [97, 13],
               [97, 61],
               [97, 47],
               [75, 29],
               [61, 13]
           ]);
        });
    });
});