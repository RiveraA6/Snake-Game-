abstract class IInputHandler {
  public abstract madeLeftMove(): boolean;
  public abstract madeRightMove(): boolean;
  public abstract resetLeftMove(): void;
  public abstract resetRightMove(): void;
}
export default IInputHandler;
