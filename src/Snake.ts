// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  public color: string;
  constructor(snakecolor: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.color = snakecolor;
  }
  public move(numberOfSteps: number): void {
    if (this.currentDirection === 1) {
      this.currentPosition += numberOfSteps;
    } else if (this.currentDirection === -1) {
      this.currentPosition -= numberOfSteps;
    }
  }
  public turn(): void {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }
  public get Position(): number {
    return this.currentPosition;
  }
}

export default Snake;
