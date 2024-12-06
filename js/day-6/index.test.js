import {convertToMatrix, findGuard, getTopLocation, moveGuardTo} from "./index.js";

describe("Day 6", () => {

    let matrix = [
        [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", "#", ".", ".", "^", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
        ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
    ];

    describe("convertToMatrix", () => {
        test("should convert the given input to a matrix", () => {
           var input = "....#.....\n" + ".........#\n" + "..........\n" + "..#.......\n" + ".......#..\n" + "..........\n" + ".#..^.....\n" + "........#.\n" + "#.........\n" + "......#...";

           let actual = convertToMatrix(input);
           expect(actual).toEqual(matrix);
        });
    });

    describe("findGuard", () => {
        test("should find the posiition of the gaurd", () => {
            expect(findGuard(matrix)).toEqual([6, 4]);

        });
    });

    describe("getTopLocation", () => {
        test("should get the top location of the given location", () => {
            expect(getTopLocation([6, 4])).toEqual([5, 4]);
            expect(getTopLocation([2, 2])).toEqual([1, 2]);
        });
    });

    describe("moveGuardTo", () => {
        test("should move the guard to the new given location", () => {
            let newMatrix = moveGuardTo(matrix, [5, 4]);
            expect(findGuard(newMatrix)).toEqual([5, 4]);
        });
    });
});