import {createRule, createRules, checkRule, checkRules} from "./index.js";

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

    describe("checkRules", () => {
       test("should check if the given input follows the given rule", () => {
           expect(checkRule([75,47,61,53,29], [75, 47])).toBeTruthy();
           expect(checkRule([75,47,61,53,29], [75, 53])).toBeTruthy();
           expect(checkRule([75,47,61,53,29], [61, 53])).toBeTruthy();
           expect(checkRule([75,47,61,53,29], [47, 29])).toBeTruthy();
           expect(checkRule([75,47,61,53,29], [75, 21])).toBeTruthy(); // one number not found
           expect(checkRule([75,47,61,53,29], [61, 60])).toBeTruthy(); // one number not found
           expect(checkRule([75,47,61,53,29], [62, 60])).toBeTruthy(); // both not found
           expect(checkRule([75,47,61,53,29], [30, 28])).toBeTruthy(); // both not found
           expect(checkRule([75,47,61,53,29], [29, 47])).toBeFalsy();
           expect(checkRule([75,47,61,53,29], [61, 75])).toBeFalsy();
       });

       test("should check if the given input follows the given all the rules", () => {

           let rules  = [[47, 53], [97, 13], [97, 61], [97, 47], [75, 29], [61, 13], [75, 53], [29, 13], [97, 29], [53, 29],
               [61, 53], [97, 53], [61, 29], [47, 13], [75, 47], [97, 75], [47, 61], [75, 61], [47, 29], [75, 13], [53, 13]];

           expect(checkRules([75,47,61,53,29], rules)).toBeTruthy();
           expect(checkRules([97,61,53,29,13], rules)).toBeTruthy();
           expect(checkRules([75,29,13], rules)).toBeTruthy();
           expect(checkRules([75,97,47,61,53], rules)).toBeFalsy();
           expect(checkRules([97,13,75,29,47], rules)).toBeFalsy();

       });
    });
});