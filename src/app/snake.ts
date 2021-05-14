import { Position } from "./position";

type Direction = "right" | "down" | "left" | "up";

/**
 * Snake Class.
 */
export class Snake {
    // VARIABLES

    /**
     * Snake's starting position on the grid.
     */
    startingPosition: Position[];

    /**
     * Snake's current position on the grid.
     */
    currentPosition: Position[];

    /**
     * Snake's direction.
     */
    direction: Direction;

    /**
     * Snake's movement speed.
     */
    speed: number;

    // CONSTRUCTORS

    /**
     * Default constructor.
     *
     * Initializes snake's position, length, direction and speed.
     */
    constructor() {
        // Snake starting length is 2
        //
        // First array element is the snake's tail
        // Last array element is the snake's head
        const startingPosition: Position[] = [
            {
                row: 0,
                col: 0,
            },
            {
                row: 0,
                col: 1,
            },
        ];

        this.startingPosition = [...startingPosition];
        this.currentPosition = [...startingPosition];
        this.direction = "right";
        this.speed = 0.1;
    }

    // METHODS

    /**
     * Resets necessary snake's properties back to the initial values.
     */
    reset = (): void => {
        this.currentPosition = [...this.startingPosition];
        this.direction = "right";
        this.speed = 0.1;
    };

    /**
     * Moves snake to the right, removes snake's tail and returns it.
     */
    moveRight = (): Position => {
        this.currentPosition.push({
            row: this.currentPosition[this.currentPosition.length - 1].row,
            col: this.currentPosition[this.currentPosition.length - 1].col + 1,
        });

        return this.currentPosition.shift()!;
    };

    /**
     * Moves snake down, removes snake's tail and returns it.
     */
    moveDown = (): Position => {
        this.currentPosition.push({
            row: this.currentPosition[this.currentPosition.length - 1].row + 1,
            col: this.currentPosition[this.currentPosition.length - 1].col,
        });

        return this.currentPosition.shift()!;
    };

    /**
     * Moves snake to the left, removes snake's tail and returns it.
     */
    moveLeft = (): Position => {
        this.currentPosition.push({
            row: this.currentPosition[this.currentPosition.length - 1].row,
            col: this.currentPosition[this.currentPosition.length - 1].col - 1,
        });

        return this.currentPosition.shift()!;
    };

    /**
     * Moves snake up, removes snake's tail and returns it.
     */
    moveUp = (): Position => {
        this.currentPosition.push({
            row: this.currentPosition[this.currentPosition.length - 1].row - 1,
            col: this.currentPosition[this.currentPosition.length - 1].col,
        });

        return this.currentPosition.shift()!;
    };

    /**
     * Makes snake to grow longer.
     */
    grow = (): void => {
        let direction: Direction = "right"; // in which direction snake's end is moving

        // Snake's end
        const tail = this.currentPosition[0];
        const tailNeighbor = this.currentPosition[1];

        // Snake's end moving horizontally
        if (tail.row === tailNeighbor.row) {
            // Snake's end moving left
            if (tail.col > tailNeighbor.col) {
                direction = "left";
            }
        }
        // Snake's end moving vertically
        else if (tail.col === tailNeighbor.col) {
            // Snake's end moving up
            if (tail.row < tailNeighbor.row) {
                direction = "up";
            }
            // Snake's end moving down
            else {
                direction = "down";
            }
        }

        switch (direction) {
            case "down":
                this.currentPosition.unshift({
                    row: this.currentPosition[0].row - 1,
                    col: this.currentPosition[0].col,
                });

                break;
            case "left":
                this.currentPosition.unshift({
                    row: this.currentPosition[0].row,
                    col: this.currentPosition[0].col + 1,
                });

                break;
            case "up":
                this.currentPosition.unshift({
                    row: this.currentPosition[0].row + 1,
                    col: this.currentPosition[0].col,
                });

                break;
            default:
                this.currentPosition.unshift({
                    row: this.currentPosition[0].row,
                    col: this.currentPosition[0].col - 1,
                });
        }
    };
}
