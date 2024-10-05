import {Game, GAME_STATUSES, MOVE_DIRECTIONS} from "./game.js";
import {NumberUtility} from "./number-utility.js";
import {Position} from "./position.js";
import expect from "expect";


expect.extend({
    toBeEqualPosition(received, expected) {
        const pass = received.isEqual(expected);

        if (pass) {
            return {
                message: () => `expected Position(${received.x}, ${received.y}) not to be equal to Position(${expected.x}, ${expected.y})`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected Position(${received.x}, ${received.y}) to be equal to Position(${expected.x}, ${expected.y})`,
                pass: false,
            };
        }
    }
});


describe("Game", () => {
    let game;

    // composition root
    function createGame() {
        const numberUtility = new NumberUtility()
        //const numberUtility = new NumberAPIUtility()
        game = new Game(numberUtility);

    }

    beforeEach(async () => {
        createGame();
    })

    it("should return Pending status as inital", async () => {
        let status = await game.getStatus()
        expect(status).toBe("PENDING")
    })

    it("should return In-progress status after start()", async () => {
        await game.start()
        let status = await game.getStatus()
        expect(status).toBe("IN-PROGRESS")
    })

    it("google should have random correct positions after start", async () => {
        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 4 // x
            }
        })
        await game.start()
        let googlePosition = await game.getGooglePosition()
        let googlePosition2 = await game.getGooglePosition()

        expect(googlePosition).toBeEqualPosition(googlePosition2)

        expect(googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(googlePosition.x).toBeLessThanOrEqual(3)

        expect(googlePosition.y).toBeGreaterThanOrEqual(0)
        expect(googlePosition.y).toBeLessThanOrEqual(2)
    })

    it("google should have random correct positions after jump interval", async () => {
        for (let i = 0; i < 10; i++) {
            createGame()
            await game.setSettings({
                gridSize: {
                    rowsCount: 1,
                    columnsCount: 4 // x
                },
                jumpInterval: 10 // 3 seconds
            })
            await game.start()
            let googlePosition = await game.getGooglePosition()
            await delay(10)
            let googlePosition2 = await game.getGooglePosition()
            expect(googlePosition2).not.toBeEqualPosition(googlePosition)
        }
    })

    it("player1 should have random correct positions inside grid after start", async () => {
        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 4 // x
            }
        })
        await game.start()
        let player1Position = await game.getPlayer1Position()
        expect(player1Position.x).toBeGreaterThanOrEqual(0)
        expect(player1Position.x).toBeLessThanOrEqual(3)

        expect(player1Position.y).toBeGreaterThanOrEqual(0)
        expect(player1Position.y).toBeLessThanOrEqual(2)
    })

    it("player1 should have random correct position not crossed with google after start", async () => {
        for (let i = 0; i < 40; i++) {
            createGame()

            await game.setSettings({
                gridSize: {
                    rowsCount: 4,
                    columnsCount: 1 // x
                }
            })
            await game.start()
            let googlePosition = await game.getGooglePosition()
            let player1Position = await game.getPlayer1Position()

            expect(player1Position).not.toBeEqualPosition(googlePosition)
        }
    })

    it("moving of player1 is correct", async () => {
        class MockFakeNumberUtility extends NumberUtility {
            // мвесто рандомной генераици мы хотим подсовывать свои
            // не рандомные фейки
            #returnsNumbers = [
                /*player1*/ 2, 2,
                /*player2*/ 2, 1,
                /*google*/ 0, 2
            ]
            #callsCount = 0;
            getRandomNumber() {
                const returnValue = this.#returnsNumbers[this.#callsCount]
                this.#callsCount++;
                return returnValue;
            }
        }

        const numberUtil = new MockFakeNumberUtility()
        const game = new Game(numberUtil);

        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 3 // x
            }
        })

        await game.start()
        let position1 = await game.getPlayer1Position()
        let position2 = await game.getPlayer2Position()
        let googlePosition = await game.getGooglePosition()
        expect(position1).toBeEqualPosition(new Position(2,2))
        expect(position2).toBeEqualPosition(new Position(2,1))
        //expect(position2).toBeEqualPosition(new Position(2,1))
        expect(googlePosition).toBeEqualPosition(new Position(0,2))
        // [  ][  ][  ]
        // [  ][  ][p2]
        // [ g][  ][p1]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.DOWN)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(2, 2));
        await game.movePlayer2(MOVE_DIRECTIONS.RIGHT)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(2, 1));
        // [  ][  ][  ]
        // [  ][  ][p2]
        // [ g][  ][p1]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.RIGHT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(2, 2))
        await game.movePlayer2(MOVE_DIRECTIONS.UP)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(2, 0));
        // [  ][  ][p2]
        // [  ][  ][  ]
        // [ g][  ][p1]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.UP)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(2, 1))
        await game.movePlayer2(MOVE_DIRECTIONS.UP)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(2, 0));
        // [  ][  ][p2]
        // [  ][  ][p1]
        // [ g][  ][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.LEFT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(1, 1))
        await game.movePlayer2(MOVE_DIRECTIONS.LEFT)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(1, 0));
        // [  ][p2][  ]
        // [  ][p1][  ]
        // [ g][  ][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.RIGHT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(2, 1))
        await game.movePlayer2(MOVE_DIRECTIONS.LEFT)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(0, 0));
        // [p2][  ][  ]
        // [  ][  ][p1]
        // [ g][  ][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.UP)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(2, 0))
        await game.movePlayer2(MOVE_DIRECTIONS.UP)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(0, 0));
        // [p2][  ][p1]
        // [  ][  ][  ]
        // [ g][  ][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.LEFT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(1, 0))
        await game.movePlayer2(MOVE_DIRECTIONS.DOWN)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(0, 1));
        // [  ][p1][  ]
        // [p2][  ][  ]
        // [ g][  ][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.LEFT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(0, 0))
        await game.movePlayer2(MOVE_DIRECTIONS.RIGHT)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(1, 1));
        // [p1][  ][  ]
        // [  ][p2][  ]
        // [ g][  ][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.DOWN)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(0, 1))
        await game.movePlayer2(MOVE_DIRECTIONS.DOWN)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(1, 2));
        // [  ][  ][  ]
        // [p1][  ][  ]
        // [ g][p2][  ]
        // ===========
    })

    it("catch the Google", async () => {
        class MockFakeNumberUtility extends NumberUtility {
            #returnsNumbers = [
                /*player1*/ 1, 2,
                /*player2*/ 2, 1,
                /*google*/ 0, 2
            ]
            #callsCount = 0;
            getRandomNumber() {
                const returnValue = this.#returnsNumbers[this.#callsCount]
                this.#callsCount++;
                return returnValue;
            }
        }

        const numberUtil = new MockFakeNumberUtility()
        const game = new Game(numberUtil);

        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 3 // x
            }
        })

        await game.start()
        let position1 = await game.getPlayer1Position()
        let position2 = await game.getPlayer2Position()
        let googlePosition = await game.getGooglePosition()
        let catchGoogle = await game.getCheckGoogleCatching()
        expect(position1).toBeEqualPosition(new Position(1,2))
        expect(position2).toBeEqualPosition(new Position(2,1))
        //expect(position2).toBeEqualPosition(new Position(2,1))
        expect(googlePosition).toBeEqualPosition(new Position(0,2))
        expect(catchGoogle).toBeNull()
        // [  ][  ][  ]
        // [  ][  ][p2]
        // [ g][p1][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.LEFT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(0, 2));
        await game.movePlayer2(MOVE_DIRECTIONS.LEFT)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(1, 1));
        catchGoogle = await game.getCheckGoogleCatching()
        expect(catchGoogle).toBe("Player 1")

        await game.movePlayer1(MOVE_DIRECTIONS.RIGHT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(1, 2));
        await game.movePlayer2(MOVE_DIRECTIONS.LEFT)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(0, 1));

        await game.movePlayer1(MOVE_DIRECTIONS.RIGHT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(2, 2));
        await game.movePlayer2(MOVE_DIRECTIONS.DOWN)
        position2 = await game.getPlayer2Position()
        expect(position2).toBeEqualPosition(new Position(0, 2));
        catchGoogle = await game.getCheckGoogleCatching()
        expect(catchGoogle).toBe("Player 2")

    })

    it("should end the game when player 1 reaches winScore", async () => {
        class MockFakeNumberUtility extends NumberUtility {
            #returnsNumbers = [
                /*player1*/ 1, 2,
                /*player2*/ 2, 1,
                /*google*/ 0, 2
            ]
            #callsCount = 0;
            getRandomNumber() {
                const returnValue = this.#returnsNumbers[this.#callsCount]
                this.#callsCount++;
                return returnValue;
            }
        }

        const numberUtil = new MockFakeNumberUtility()
        const game = new Game(numberUtil);

        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 3 // x
            },
            winScore: 1
        })

        await game.start()
        let position1 = await game.getPlayer1Position()
        let position2 = await game.getPlayer2Position()
        let googlePosition = await game.getGooglePosition()
        let catchGoogle = await game.getCheckGoogleCatching()
        expect(position1).toBeEqualPosition(new Position(1,2))
        expect(position2).toBeEqualPosition(new Position(2,1))
        expect(googlePosition).toBeEqualPosition(new Position(0,2))
        expect(catchGoogle).toBeNull()
        // [  ][  ][  ]
        // [  ][  ][p2]
        // [ g][p1][  ]
        // ===========
        await game.movePlayer1(MOVE_DIRECTIONS.LEFT)
        position1 = await game.getPlayer1Position()
        expect(position1).toBeEqualPosition(new Position(0, 2));
        catchGoogle = await game.getCheckGoogleCatching()
        expect(catchGoogle).toBe("Player 1")

        let status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.FINISHED)

    })

    it("should end the game when player 2 reaches winScore", async () => {
        class MockFakeNumberUtility extends NumberUtility {
            #returnsNumbers = [
                /*player1*/ 1, 2,
                /*player2*/ 0, 1,
                /*google*/ 0, 2
            ];
            #callsCount = 0;
            getRandomNumber() {
                const returnValue = this.#returnsNumbers[this.#callsCount];
                this.#callsCount++;
                return returnValue;
            }
        }

        const numberUtil = new MockFakeNumberUtility();
        const game = new Game(numberUtil);

        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 3 // x
            },
            winScore: 1 // Устанавливаем winScore на 1 для быстрого завершения игры
        });

        await game.start();
        let position1 = await game.getPlayer1Position();
        let position2 = await game.getPlayer2Position();
        let googlePosition = await game.getGooglePosition();
        let catchGoogle = await game.getCheckGoogleCatching();
        expect(position1).toBeEqualPosition(new Position(1, 2));
        expect(position2).toBeEqualPosition(new Position(0, 1));
        expect(googlePosition).toBeEqualPosition(new Position(0, 2));
        expect(catchGoogle).toBeNull();

        await game.movePlayer2(MOVE_DIRECTIONS.DOWN);
        position2 = await game.getPlayer2Position();
        expect(position2).toBeEqualPosition(new Position(0, 2));
        catchGoogle = await game.getCheckGoogleCatching();
        expect(catchGoogle).toBe("Player 2");

        let status = await game.getStatus();
        expect(status).toBe(GAME_STATUSES.FINISHED);
    });

    it("should end the game when Google reaches winScore", async () => {
        class MockFakeNumberUtility extends NumberUtility {
            #returnsNumbers = [
                /*player1*/ 1, 2,
                /*player2*/ 2, 1,
                /*google*/ 0, 2
            ];
            #callsCount = 0;
            getRandomNumber() {
                const returnValue = this.#returnsNumbers[this.#callsCount];
                this.#callsCount++;
                return returnValue;
            }
        }

        const numberUtil = new MockFakeNumberUtility();
        const game = new Game(numberUtil);

        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 3 // x
            },
            winScore: 1 // Устанавливаем winScore на 1 для быстрого завершения игры
        });

        await game.start();
        let position1 = await game.getPlayer1Position();
        let position2 = await game.getPlayer2Position();
        let googlePosition = await game.getGooglePosition();
        let catchGoogle = await game.getCheckGoogleCatching();
        let jumpGoogle = await game.getJumpGoogle()
        expect(position1).toBeEqualPosition(new Position(1, 2));
        expect(position2).toBeEqualPosition(new Position(2, 1));
        expect(googlePosition).toBeEqualPosition(new Position(0, 2));
        expect(catchGoogle).toBeNull();

        await game.movePlayer1(MOVE_DIRECTIONS.RIGHT);
        await game.movePlayer2(MOVE_DIRECTIONS.LEFT);

        let status = await game.getStatus();
        expect(status).toBe(GAME_STATUSES.FINISHED);
    });

})


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

