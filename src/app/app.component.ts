import { COLS, Grid, ROWS } from "./grid";
import { Component, ElementRef, ViewChild } from "@angular/core";

import { Food } from "./food";
import { Position } from "./position";
import { Snake } from "./snake";
import { interval } from "rxjs";

const INITIAL_INTERVAL = 850; // TODO: snake's speed

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title: string;
    buttonState: string;
    highestScore: number;
    lastScore: number;
    currentScore: number;
    isGameRunning: boolean;
    grid: Grid;
    snake: Snake;
    food: Food;

    @ViewChild("app") app: ElementRef | undefined = undefined;

    constructor() {
        this.title = "Angular Snake Game";
        this.buttonState = "Start Game";
        this.highestScore = 0;
        this.lastScore = 0;
        this.currentScore = 0;
        this.isGameRunning = false;
        this.grid = new Grid();
        this.snake = new Snake();
        this.food = new Food();

        // Expand to have the correct amount of rows
        for (let row = 0; row < ROWS; row++) {
            this.grid.values.push([]);
        }

        // Expand all rows to have the correct amount of columns
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                this.grid.values[row].push(" ");
            }
        }
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        if (this.app) {
            this.app.nativeElement.focus(); // focus the div so the keys get registered
        }
    }

    /**
     * Resets grid and snake's properties.
     */
    reset = (): void => {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                this.grid.values[row][col] = " ";
            }
        }

        this.snake.reset();
    };

    /**
     * Renders snake on the grid.
     * @param snakePosition - snake's position on the grid
     */
    renderSnake = (snakePosition: Position[]): void => {
        for (let index = 0; index < snakePosition.length; index++) {
            this.grid.values[snakePosition[index].row][snakePosition[index].col] = "P";
        }
    };

    /**
     * Renders food on the grid.
     * @param snakePosition - snake's position on the grid
     */
    renderFood = (snakePosition: Position[]): void => {
        this.food.generatePosition(snakePosition);

        if (this.food.position !== null) {
            this.grid.values[this.food.position.row][this.food.position.col] = "X";
        }
    };

    /**
     * Button click event handler.
     *
     * Either starts the game or restarts the game.
     *
     * Game's main functionality can be found here.
     */
    onStart = (): void => {
        if (this.buttonState === "Start Game" || this.buttonState === "Game Over - Restart Game") {
            if (this.buttonState === "Game Over - Restart Game") {
                this.reset();
            }

            this.isGameRunning = true;
            this.buttonState = "In Progress";
            this.currentScore = 0;

            this.renderSnake(this.snake.startingPosition);
            this.renderFood(this.snake.startingPosition);

            // TODO: snake's speed
            const game = interval(INITIAL_INTERVAL).subscribe(() => {
                let { row, col } =
                    this.snake.currentPosition[this.snake.currentPosition.length - 1]; // snake's head

                // SNAKE'S MOVEMENT SECTION

                switch (this.snake.direction) {
                    case "down":
                        if (row + 1 < ROWS) {
                            const snakeTail = this.snake.moveDown();

                            this.grid.values[snakeTail.row][snakeTail.col] = " ";
                        } else {
                            this.isGameRunning = false;
                        }

                        break;
                    case "left":
                        if (col > 0) {
                            const snakeTail = this.snake.moveLeft();

                            this.grid.values[snakeTail.row][snakeTail.col] = " ";
                        } else {
                            this.isGameRunning = false;
                        }

                        break;
                    case "up":
                        if (row > 0) {
                            const snakeTail = this.snake.moveUp();

                            this.grid.values[snakeTail.row][snakeTail.col] = " ";
                        } else {
                            this.isGameRunning = false;
                        }

                        break;
                    default:
                        if (col + 1 < COLS) {
                            const snakeTail = this.snake.moveRight();

                            this.grid.values[snakeTail.row][snakeTail.col] = " ";
                        } else {
                            this.isGameRunning = false;
                        }
                }

                ({ row, col } = this.snake.currentPosition[this.snake.currentPosition.length - 1]);

                // Check if snake has not eaten itself
                for (let index = 0; index < this.snake.currentPosition.length - 1; index++) {
                    if (
                        row === this.snake.currentPosition[index].row &&
                        col === this.snake.currentPosition[index].col
                    ) {
                        this.isGameRunning = false;

                        break;
                    }
                }

                if (this.isGameRunning) {
                    // SNAKE EATS FOOD SECTION

                    this.renderSnake(this.snake.currentPosition);

                    if (this.food.position !== null) {
                        if (this.food.position.row === row && this.food.position.col === col) {
                            this.currentScore++;

                            this.snake.grow();

                            this.renderSnake(this.snake.currentPosition);

                            this.renderFood(this.snake.currentPosition);
                        }
                    }
                } else {
                    // GAME OVER SECTION

                    this.buttonState = "Game Over - Restart Game";

                    if (this.currentScore > this.highestScore) {
                        this.highestScore = this.currentScore;
                    }

                    this.lastScore = this.currentScore;

                    game.unsubscribe();
                }
            });
        }
    };

    // Direction change
    //
    // Snake can only go head first. Snake
    // cannot go in reverse.
    //
    // BUG: Snake can eat itself by changing
    // directions too quickly.
    onKeyDown = (event: KeyboardEvent): void => {
        if (this.isGameRunning) {
            switch (event.key) {
                case "ArrowRight":
                    if (this.snake.direction === "down" || this.snake.direction === "up") {
                        this.snake.direction = "right";
                    }

                    break;
                case "ArrowDown":
                    if (this.snake.direction === "right" || this.snake.direction === "left") {
                        this.snake.direction = "down";
                    }

                    break;
                case "ArrowLeft":
                    if (this.snake.direction === "down" || this.snake.direction === "up") {
                        this.snake.direction = "left";
                    }

                    break;
                case "ArrowUp":
                    if (this.snake.direction === "right" || this.snake.direction === "left") {
                        this.snake.direction = "up";
                    }

                    break;
                default:
                    return;
            }
        }
    };
}
