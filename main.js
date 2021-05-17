(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mlorencs/Documents/Projects/Web/angular-snake/src/main.ts */"zUnb");


/***/ }),

/***/ "2SL5":
/*!*************************!*\
  !*** ./src/app/food.ts ***!
  \*************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "WEYW");

/**
 * Food Class.
 */
class Food {
    // CONSTRUCTORS
    /**
     * Default constructor.
     *
     * Initializes food position.
     */
    constructor() {
        // METHODS
        /**
         * Generates a random food position.
         * @param snakePosition - current snake position
         * @param numberOfRows - grid's number of rows
         * @param numberOfColumns - grid's number of columns
         */
        this.generatePosition = (snakePosition) => {
            let isPositionGenerated = false;
            let randomRow = 0;
            let randomCol = 0;
            while (!isPositionGenerated) {
                randomRow = Math.floor(Math.random() * (_grid__WEBPACK_IMPORTED_MODULE_0__["ROWS"] - 1)); // generate a random row between 0 and number of rows (9)
                randomCol = Math.floor(Math.random() * (_grid__WEBPACK_IMPORTED_MODULE_0__["COLS"] - 1)); // generate a random column between 0 and number of columns (16)
                for (let index = 0; index < snakePosition.length; index++) {
                    // Food cannot be generated inside the snake
                    if (snakePosition[index].row === randomRow &&
                        snakePosition[index].col === randomCol) {
                        break;
                    }
                    else if (index === snakePosition.length - 1) {
                        isPositionGenerated = true;
                    }
                }
            }
            this.position = {
                row: randomRow,
                col: randomCol,
            };
        };
        this.position = null;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EDh0":
/*!**************************!*\
  !*** ./src/app/snake.ts ***!
  \**************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/**
 * Snake Class.
 */
class Snake {
    // CONSTRUCTORS
    /**
     * Default constructor.
     *
     * Initializes snake's position, length, direction and speed.
     */
    constructor() {
        // METHODS
        /**
         * Resets necessary snake's properties back to the initial values.
         */
        this.reset = () => {
            this.currentPosition = [...this.startingPosition];
            this.direction = "right";
            this.speed = 0.1;
        };
        /**
         * Moves snake to the right, removes snake's tail and returns it.
         */
        this.moveRight = () => {
            this.currentPosition.push({
                row: this.currentPosition[this.currentPosition.length - 1].row,
                col: this.currentPosition[this.currentPosition.length - 1].col + 1,
            });
            return this.currentPosition.shift();
        };
        /**
         * Moves snake down, removes snake's tail and returns it.
         */
        this.moveDown = () => {
            this.currentPosition.push({
                row: this.currentPosition[this.currentPosition.length - 1].row + 1,
                col: this.currentPosition[this.currentPosition.length - 1].col,
            });
            return this.currentPosition.shift();
        };
        /**
         * Moves snake to the left, removes snake's tail and returns it.
         */
        this.moveLeft = () => {
            this.currentPosition.push({
                row: this.currentPosition[this.currentPosition.length - 1].row,
                col: this.currentPosition[this.currentPosition.length - 1].col - 1,
            });
            return this.currentPosition.shift();
        };
        /**
         * Moves snake up, removes snake's tail and returns it.
         */
        this.moveUp = () => {
            this.currentPosition.push({
                row: this.currentPosition[this.currentPosition.length - 1].row - 1,
                col: this.currentPosition[this.currentPosition.length - 1].col,
            });
            return this.currentPosition.shift();
        };
        /**
         * Makes snake to grow longer.
         */
        this.grow = () => {
            let direction = "right"; // in which direction snake's end is moving
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
        // Snake starting length is 2
        //
        // First array element is the snake's tail
        // Last array element is the snake's head
        const startingPosition = [
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
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "WEYW");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food */ "2SL5");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake */ "EDh0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["app"];
function AppComponent_div_21_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 16);
} }
function AppComponent_div_21_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 17);
} }
function AppComponent_div_21_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 18);
} }
const _c1 = function (a0) { return { "width.px": a0 }; };
function AppComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_21_div_1_div_1_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_div_21_div_1_div_2_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppComponent_div_21_div_1_div_3_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r6 = ctx.index;
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, ctx_r4.grid.blockWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.grid.values[row_r3][column_r6] === " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.grid.values[row_r3][column_r6] === "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.grid.values[row_r3][column_r6] === "X");
} }
const _c2 = function (a0) { return { "height.px": a0 }; };
function AppComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_21_div_1_Template, 4, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rows_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, ctx_r1.grid.blockHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rows_r2);
} }
const _c3 = function (a0, a1) { return { "width.px": a0, "height.px": a1 }; };
const INITIAL_INTERVAL = 850; // TODO: snake's speed
class AppComponent {
    constructor() {
        this.app = undefined;
        /**
         * Resets grid and snake's properties.
         */
        this.reset = () => {
            for (let row = 0; row < _grid__WEBPACK_IMPORTED_MODULE_0__["ROWS"]; row++) {
                for (let col = 0; col < _grid__WEBPACK_IMPORTED_MODULE_0__["COLS"]; col++) {
                    this.grid.values[row][col] = " ";
                }
            }
            this.snake.reset();
        };
        /**
         * Renders snake on the grid.
         * @param snakePosition - snake's position on the grid
         */
        this.renderSnake = (snakePosition) => {
            for (let index = 0; index < snakePosition.length; index++) {
                this.grid.values[snakePosition[index].row][snakePosition[index].col] = "P";
            }
        };
        /**
         * Renders food on the grid.
         * @param snakePosition - snake's position on the grid
         */
        this.renderFood = (snakePosition) => {
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
        this.onStart = () => {
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
                const game = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(INITIAL_INTERVAL).subscribe(() => {
                    let { row, col } = this.snake.currentPosition[this.snake.currentPosition.length - 1]; // snake's head
                    // SNAKE'S MOVEMENT SECTION
                    switch (this.snake.direction) {
                        case "down":
                            if (row + 1 < _grid__WEBPACK_IMPORTED_MODULE_0__["ROWS"]) {
                                const snakeTail = this.snake.moveDown();
                                this.grid.values[snakeTail.row][snakeTail.col] = " ";
                            }
                            else {
                                this.isGameRunning = false;
                            }
                            break;
                        case "left":
                            if (col > 0) {
                                const snakeTail = this.snake.moveLeft();
                                this.grid.values[snakeTail.row][snakeTail.col] = " ";
                            }
                            else {
                                this.isGameRunning = false;
                            }
                            break;
                        case "up":
                            if (row > 0) {
                                const snakeTail = this.snake.moveUp();
                                this.grid.values[snakeTail.row][snakeTail.col] = " ";
                            }
                            else {
                                this.isGameRunning = false;
                            }
                            break;
                        default:
                            if (col + 1 < _grid__WEBPACK_IMPORTED_MODULE_0__["COLS"]) {
                                const snakeTail = this.snake.moveRight();
                                this.grid.values[snakeTail.row][snakeTail.col] = " ";
                            }
                            else {
                                this.isGameRunning = false;
                            }
                    }
                    ({ row, col } = this.snake.currentPosition[this.snake.currentPosition.length - 1]);
                    // Check if snake has not eaten itself
                    for (let index = 0; index < this.snake.currentPosition.length - 1; index++) {
                        if (row === this.snake.currentPosition[index].row &&
                            col === this.snake.currentPosition[index].col) {
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
                    }
                    else {
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
        this.onKeyDown = (event) => {
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
        this.title = "Angular Snake Game";
        this.buttonState = "Start Game";
        this.highestScore = 0;
        this.lastScore = 0;
        this.currentScore = 0;
        this.isGameRunning = false;
        this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["Grid"]();
        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_2__["Snake"]();
        this.food = new _food__WEBPACK_IMPORTED_MODULE_1__["Food"]();
        // Expand to have the correct amount of rows
        for (let row = 0; row < _grid__WEBPACK_IMPORTED_MODULE_0__["ROWS"]; row++) {
            this.grid.values.push([]);
        }
        // Expand all rows to have the correct amount of columns
        for (let row = 0; row < _grid__WEBPACK_IMPORTED_MODULE_0__["ROWS"]; row++) {
            for (let col = 0; col < _grid__WEBPACK_IMPORTED_MODULE_0__["COLS"]; col++) {
                this.grid.values[row].push(" ");
            }
        }
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.app) {
            this.app.nativeElement.focus(); // focus the div so the keys get registered
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.app = _t.first);
    } }, decls: 22, vars: 13, consts: [["tabindex", "0", 1, "app", 3, "keydown"], ["app", ""], [1, "header"], [1, "title"], [1, "score-container"], [1, "score"], [1, "counter"], [3, "click"], [1, "grid", 3, "ngStyle"], ["class", "grid-rows", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "grid-rows", 3, "ngStyle"], ["class", "grid-columns", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "grid-columns", 3, "ngStyle"], ["class", "field empty", 4, "ngIf"], ["class", "field snake", 4, "ngIf"], ["class", "field food", 4, "ngIf"], [1, "field", "empty"], [1, "field", "snake"], [1, "field", "food"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function AppComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Highest Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Last Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Current Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() { return ctx.onStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AppComponent_div_21_Template, 2, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.highestScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.lastScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currentScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("button ", ctx.buttonState === "Start Game" ? "start" : ctx.buttonState === "In Progress" ? "in-progress" : "game-over", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.buttonState, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](10, _c3, ctx.grid.width, ctx.grid.height + 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.grid.values);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".app[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-style: normal;\n  font-size: 48px;\n  color: #343434;\n  margin: 30px 0 20px 0;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .score-container[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-style: normal;\n  font-size: 16px;\n  color: #343434;\n  margin: 5px 0 0 0;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .score-container[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .score-container[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: none;\n  width: 290px;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  color: #ffffff;\n  text-align: center;\n  cursor: pointer;\n  padding: 10px 0;\n  margin: 20px 0 30px 0;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button.start[_ngcontent-%COMP%] {\n  background: #39ff14;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button.in-progress[_ngcontent-%COMP%] {\n  background: #ffdf00;\n  cursor: default;\n}\n.app[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button.game-over[_ngcontent-%COMP%] {\n  background: #8a0707;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  border: 1px solid #343434;\n  background-image: url('angular.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 700px 350px;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-rows[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-rows[_ngcontent-%COMP%]   .grid-columns[_ngcontent-%COMP%] {\n  border: 1px solid #d8dcd6;\n  height: 100%;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-rows[_ngcontent-%COMP%]   .grid-columns[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-rows[_ngcontent-%COMP%]   .grid-columns[_ngcontent-%COMP%]   .field.empty[_ngcontent-%COMP%] {\n  background: #ffffff;\n  opacity: 0.1;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-rows[_ngcontent-%COMP%]   .grid-columns[_ngcontent-%COMP%]   .field.snake[_ngcontent-%COMP%] {\n  background-image: url('snake-skin.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50px 50px;\n}\n.app[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .grid-rows[_ngcontent-%COMP%]   .grid-columns[_ngcontent-%COMP%]   .field.food[_ngcontent-%COMP%] {\n  background: #ff0800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFDUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ1o7QUFHWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRGhCO0FBR2dCO0VBQ0ksU0FBQTtBQURwQjtBQUlnQjtFQUNJLGdCQUFBO0FBRnBCO0FBT1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUxaO0FBT1k7RUFDSSxtQkFBQTtBQUxoQjtBQVFZO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBTmhCO0FBU1k7RUFDSSxtQkFBQTtBQVBoQjtBQVlJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQVZSO0FBWVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQVZaO0FBWVk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFWaEI7QUFZZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVZwQjtBQVlvQjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQVZ4QjtBQWFvQjtFQUNJLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FBWHhCO0FBY29CO0VBQ0ksbUJBQUE7QUFaeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NvcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQzNDM0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY291bnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAzMHB4IDA7XG5cbiAgICAgICAgICAgICYuc3RhcnQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOWZmMTQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuaW4tcHJvZ3Jlc3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmRmMDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmdhbWUtb3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhhMDcwNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmlkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM0MzQzNDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltZy9hbmd1bGFyLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA3MDBweCAzNTBweDtcblxuICAgICAgICAuZ3JpZC1yb3dzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLmdyaWQtY29sdW1ucyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNkNjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICYuZW1wdHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICYuc25ha2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltZy9zbmFrZS1za2luLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmLmZvb2Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMDgwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WEYW":
/*!*************************!*\
  !*** ./src/app/grid.ts ***!
  \*************************/
/*! exports provided: ROWS, COLS, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS", function() { return COLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
// CONSTANTS
// The following values are in pixels
const WIDTH = 850;
const HEIGHT = 500;
const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 50;
const ROWS = HEIGHT / BLOCK_HEIGHT;
const COLS = WIDTH / BLOCK_WIDTH;
/**
 * Grid Class.
 */
class Grid {
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


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map