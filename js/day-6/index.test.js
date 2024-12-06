import {convertToMatrix, findGuard, getTopLocation, moveGuardTo, turnGuard, hasAny} from "./index.js";

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

        test("should work after turn right", () => {
            let newMatrix = turnGuard(matrix, [6, 4]);
            expect(findGuard(newMatrix)).toEqual([6, 4]);
        });
    });

    describe("hasAny", () => {
       test("should return the location of any", () => {
           expect(hasAny([".", "."], ["^", ">", "v", "<"])).toEqual(-1);
           expect(hasAny([".", ".", "^"], ["^", ">", "v", "<"])).toEqual(2);
           expect(hasAny([".", "<", "."], ["^", ">", "v", "<"])).toEqual(1);
           expect(hasAny(["v", ".", "."], ["^", ">", "v", "<"])).toEqual(0);
           expect(hasAny([".", ".", ">"], ["^", ">", "v", "<"])).toEqual(2);
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
            let newMatrix = moveGuardTo(matrix, [6, 4],[5, 4]);
            expect(findGuard(newMatrix)).toEqual([5, 4]);
        });

        test("should move the right guard to the new given location", () => {
            let newMatrix = moveGuardTo(turnGuard(matrix, [6, 4]), [6, 4],[6, 5]);
            expect(findGuard(newMatrix)).toEqual([6, 5]);
        });

        test("should mark old location", () => {
            let newMatrix = moveGuardTo(matrix, [6, 4],[5, 4]);
            expect(newMatrix[6][4]).toEqual("X");
        });
    });

    describe("turnGuard", () => {
       test("should turn the guard right", () => {
           let newMatrix = turnGuard(matrix, [6, 4]);
           expect(newMatrix[6][4]).toEqual(">");
       });

       test("should turn the guard down", () => {
           let location = [6, 4];
           let newMatrix = turnGuard(turnGuard(matrix, location), location);
           expect(newMatrix[6][4]).toEqual("v");
       });

       test("should turn the guard left", () => {
           let location = [6, 4];
           let newMatrix = turnGuard(turnGuard(turnGuard(matrix, location), location), location);
           expect(newMatrix[6][4]).toEqual("<");
       });

       test("should turn the guard up", () => {
           let location = [6, 4];
           let newMatrix = turnGuard(turnGuard(turnGuard(turnGuard(matrix, location), location), location), location);
           expect(newMatrix[6][4]).toEqual("^");
       });
    });
});