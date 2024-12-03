import {isReportSafe, calculateNeighboursDifference} from "./index.js";
describe("Day 2", () => {
    describe("isReportSafe", () => {
        test("should return false when the numbers are not in either ascending or descending order", () => {
            expect(isReportSafe([1, 3, 2, 4, 5])).toBeFalsy();
            expect(isReportSafe([4, 3, 2, 1, 5])).toBeFalsy();
        });

        test("should return true when the numbers are in increasing order", () => {
            expect(isReportSafe([1, 2, 4, 5])).toBeTruthy();
            expect(isReportSafe([4, 5, 8, 9])).toBeTruthy();
        });
    });

    describe("calculateNeighboursDifference", () => {
        test("should calculate the difference between neighbours", () => {
            expect(calculateNeighboursDifference([1, 3, 2, 4, 5])).toEqual([-2, 1, -2, -1]);
            expect(calculateNeighboursDifference([4, 3, 2, 5, 5])).toEqual([1, 1, -3, 0]);
            expect(calculateNeighboursDifference([1, 2, 4, 5])).toEqual([-1, -2, -1]);
            expect(calculateNeighboursDifference([9, 8, 5, 2])).toEqual([1, 3, 3]);
        });
    });
});