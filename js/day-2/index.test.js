import {isReportSafe, calculateNeighboursDifference, howManyAreSafe} from "./index.js";
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

        test("should return true when the numbers are in decreasing order", () => {
            expect(isReportSafe([9, 7, 5, 4])).toBeTruthy();
            expect(isReportSafe([3, 2, 1, 0])).toBeTruthy();
        });

        test("should return false when the difference is not between one and three", () => {
            expect(isReportSafe([9, 5, 4])).toBeFalsy();
            expect(isReportSafe([30, 2, 1, 0])).toBeFalsy();
            expect(isReportSafe([1, 2, 6, 7])).toBeFalsy();
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

    describe("howManyAreSafe", () => {
        test("should give the count of total number of safe reports", () => {
            let input = "7 6 4 2 1\n" + "1 2 7 8 9\n" + "9 7 6 2 1\n" + "1 3 2 4 5\n" + "8 6 4 4 1\n" + "1 3 6 7 9";
            expect(howManyAreSafe(input)).toEqual(2);
        });
    });
});