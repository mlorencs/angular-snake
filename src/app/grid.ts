type GridValue = "X" | "P" | " ";

// CONSTANTS

// The following values are in pixels
const WIDTH = 850;
const HEIGHT = 500;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 50;

export const ROWS = HEIGHT / BLOCK_HEIGHT;
export const COLS = WIDTH / BLOCK_WIDTH;

/**
 * Grid Class.
 */
export class Grid {
    // CLASS VARIABLES

    /**
     * Grid's width.
     */
    width: number;

    /**
     * Grid's height.
     */
    height: number;

    /**
     * Grid's one block width.
     */
    blockWidth: number;

    /**
     * Grid's one block height.
     */
    blockHeight: number;

    /**
     * Two dimensional array represented as a grid with custom values inside it.
     */
    values: GridValue[][];

    // CONSTRUCTORS

    /**
     * Default constructor.
     *
     * Initializes grid.
     */
    constructor() {
        this.width = WIDTH;
        this.height = HEIGHT;
        this.blockWidth = BLOCK_WIDTH;
        this.blockHeight = BLOCK_HEIGHT;
        this.values = [];
    }
}
