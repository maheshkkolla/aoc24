import {convertToMatrix, findGuard, getNextLocation, moveGuardTo, turnGuard, hasAny, isOutOfMatrix, totalLocations, isInLoop, totalPart2} from "./index.js";

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
            expect(getNextLocation([6, 4], "^")).toEqual([5, 4]);
            expect(getNextLocation([2, 2], "^")).toEqual([1, 2]);
        });

        test("should get the right location of the given location", () => {
            expect(getNextLocation([6, 4], ">")).toEqual([6, 5]);
        });

        test("should get the down location of the given location", () => {
            expect(getNextLocation([6, 4], "v")).toEqual([7, 4]);
        });

        test("should get the left location of the given location", () => {
            expect(getNextLocation([6, 4], "<")).toEqual([6, 3]);
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

    describe("isOutOfMatrix", () => {
        test("should return false if the location is not out of matrix", () => {
            expect(isOutOfMatrix(matrix, [1,3])).toBeFalsy();
            expect(isOutOfMatrix(matrix, [0, 0])).toBeFalsy();
            expect(isOutOfMatrix(matrix, [4, 5])).toBeFalsy();
        });

        test("should return true if the location is out of matrix", () => {
            expect(isOutOfMatrix(matrix, [-1,3])).toBeTruthy();
            expect(isOutOfMatrix(matrix, [0, -1])).toBeTruthy();
            expect(isOutOfMatrix(matrix, [10, 5])).toBeTruthy();
            expect(isOutOfMatrix(matrix, [2, 10])).toBeTruthy();
        });
    });

    describe("totalLocations", () => {
        test("should give total the visited locations", () => {
            var input = "....#.....\n" + ".........#\n" + "..........\n" + "..#.......\n" + ".......#..\n" + "..........\n" + ".#..^.....\n" + "........#.\n" + "#.........\n" + "......#...";
            let actual = totalLocations(input);
            expect(actual).toEqual(41);
        });
    });

    describe("isInLoop", () => {
       test("should return false when the given matrix is not in loop", () => {
           expect(isInLoop(matrix)).toBeFalsy();
       });

       test("should return true when the given matrix is not in loop", () => {
           let loopMatrix = [
               [".", ".", ".", ".", "#", ".", ".", ".", ".", "."],
               [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
               [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
               [".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
               [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
               [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
               [".", "#", ".", "0", "^", ".", ".", ".", ".", "."],
               [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
               ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
               [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
           ];
           expect(isInLoop(loopMatrix)).toBeTruthy();
       });
    });

    describe("totalPart2", () => {
        test("should get the total", () => {
            var input = "....#.....\n" + ".........#\n" + "..........\n" + "..#.......\n" + ".......#..\n" + "..........\n" + ".#..^.....\n" + "........#.\n" + "#.........\n" + "......#...";
            expect(totalPart2(input)).toEqual(6);
        });
    });
});