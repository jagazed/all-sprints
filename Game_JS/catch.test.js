import {Position} from "./position.js";

class Game {
    #player1Position = null;
    #player2Position = null;
    #googlePosition = null;

    checkGoogleCatching() {
        if (this.#player1Position && this.#googlePosition && this.#player1Position.isEqual(this.#googlePosition)) {
            return "Player 1";
        }

        if (this.#player2Position && this.#googlePosition && this.#player2Position.isEqual(this.#googlePosition)) {
            return "Player 2";
        }

        return null;
    }

    setPlayer1Position(position) {
        this.#player1Position = position;
    }

    setPlayer2Position(position) {
        this.#player2Position = position;
    }

    setGooglePosition(position) {
        this.#googlePosition = position;
    }
}

// Тесты
describe('Game2', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test('Player 1 catches Google', () => {
        const player1Position = new Position(1, 1);
        const googlePosition = new Position(1, 1);

        game.setPlayer1Position(player1Position);
        game.setGooglePosition(googlePosition);

        expect(game.checkGoogleCatching()).toBe("Player 1");
    });

    test('Player 2 catches Google', () => {
        const player2Position = new Position(2, 2);
        const googlePosition = new Position(2, 2);

        game.setPlayer2Position(player2Position);
        game.setGooglePosition(googlePosition);

        expect(game.checkGoogleCatching()).toBe("Player 2");
    });

    test('No one catches Google', () => {
        const player1Position = new Position(1, 1);
        const player2Position = new Position(2, 2);
        const googlePosition = new Position(3, 3);

        game.setPlayer1Position(player1Position);
        game.setPlayer2Position(player2Position);
        game.setGooglePosition(googlePosition);

        expect(game.checkGoogleCatching()).toBeNull();
    });

    test('Both players catch Google (should not happen)', () => {
        const player1Position = new Position(1, 1);
        const player2Position = new Position(1, 1);
        const googlePosition = new Position(1, 1);

        game.setPlayer1Position(player1Position);
        game.setPlayer2Position(player2Position);
        game.setGooglePosition(googlePosition);

        expect(game.checkGoogleCatching()).toBe("Player 1"); // Предположим, что Player 1 поймал Google первым
    });
});