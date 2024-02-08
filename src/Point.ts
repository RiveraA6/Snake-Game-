class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  /**
   * Returns the x coordinate of the point
   */
  public get x(): number {
    return this.xcoord;
  }
  /**
   * Returns the y coordinate of the point
   */
  public get y(): number {
    return this.ycoord;
  }
}
export default Point;
