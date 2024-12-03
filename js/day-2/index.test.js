import {isReportSafe} from "./index.js";
describe("Day 2", () => {
    describe("isReportSafe", () => {
        test("should return false when the numbers are not in either ascending or descending order", () => {
            expect(isReportSafe([1, 3, 2, 4, 5])).toBeFalsy();
            expect(isReportSafe([4, 3, 2, 1, 5])).toBeFalsy();
        });
    });
});