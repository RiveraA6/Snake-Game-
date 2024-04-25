import "./App.css";
import "./App.css";
import Point from "./Point";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import world from "./WorldModel";
import CanvasView from "./CanvasWorldView";
import GameController from "./GameController";
import HumanPlayer from "./HumanPlayer";
import AWPlayer from "./AvoidWallsPlayer";
import SnakeController from "./SnakeController";
import LRKeyInputHandler from "./LRKeyInputHandler";
export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    let startPoint = new Point(5, 5);
    let earthSnake = new Snake("green", startPoint, 10);
    const earth = new world();
    earth.addSnake(earthSnake);
    let earthView = new CanvasView(10);
    earth.addView(earthView);
    let earthController = new GameController(earth);
    let earthInputHandler = new LRKeyInputHandler();
    let humanSnakeController = new SnakeController(earthSnake, earth);
    let avoidWallsController = new SnakeController(earthSnake, earth);
    let humanPlayer = new HumanPlayer(humanSnakeController, earthInputHandler);
    let avoidWallsPlayer = new AWPlayer(avoidWallsController);
    earthController.player1 = humanPlayer;
    earthController.player2 = avoidWallsPlayer;
    earth.addView(earthView);
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    display(earthSnake.position.x, earthSnake.position.y);
    display(earthSnake.direction);
    earthController.run();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
