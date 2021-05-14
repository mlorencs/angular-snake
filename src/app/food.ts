import { COLS, ROWS } from "./grid";

import { Position } from "./position";

/**
 * Food Class.
 */
export class Food {
    // VARIABLES

    /**
     * Food position
     */
    position: Position | null;

    // CONSTRUCTORS

    /**
     * Default constructor.
     *
     * Initializes food position.
     */
    constructor() {
        this.position = null;
    }

    // METHODS

    /**
     * Generates a random food position.
     * @param snakePosition - current snake position
     * @param numberOfRows - grid's number of rows
     * @param numberOfColumns - grid's number of columns
     */
    generatePosition = (snakePosition: Position[]): void => {
        let isPositionGenerated = false;
        let randomRow = 0;
        let randomCol = 0;

        while (!isPositionGenerated) {
            randomRow = Math.floor(Math.random() * (ROWS - 1)); // generate a random row between 0 and number of rows (9)
            randomCol = Math.floor(Math.random() * (COLS - 1)); // generate a random column between 0 and number of columns (16)

            for (let index = 0; index < snakePosition.length; index++) {
                // Food cannot be generated inside the snake
                if (
                    snakePosition[index].row === randomRow &&
                    snakePosition[index].col === randomCol
                ) {
                    break;
                } else if (index === snakePosition.length - 1) {
                    isPositionGenerated = true;
                }
            }
        }

        this.position = {
            row: randomRow,
            col: randomCol,
        };
    };
}
