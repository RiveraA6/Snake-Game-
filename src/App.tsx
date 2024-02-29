import "./App.css";
import "./App.css";
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
    const smallSnake = new Snake("green");
    const bigSnake = new Snake("red");
    let earthSnake = new Snake("blue");
    const earth = new world(earthSnake);
    let earthView = new CanvasView(1);
    let earthController = new GameController(earth);
    let earthInputHandler = new LRKeyInputHandler();
    let humanSnakeController = new SnakeController(earthSnake, earth);
    let avoidWallsController = new SnakeController(smallSnake, earth);
    let humanPlayer = new HumanPlayer(humanSnakeController, earthInputHandler);
    let avoidWallsPlayer = new AWPlayer(avoidWallsController);
    earthController.player1 = humanPlayer;
    earthController.player2 = avoidWallsPlayer;
    earth.view = earthView;
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
