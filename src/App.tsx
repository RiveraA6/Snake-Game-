import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";
import world from "./WorldMode1";
export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    const smallSnake = new Snake("green");
    const bigSnake = new Snake("red");
    let earthSnake = new Snake("blue");
    const earth = new world(earthSnake);
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    display(smallSnake.currentXPosition, smallSnake.currentYPosition);
    display(bigSnake.currentXPosition, bigSnake.currentYPosition);
    smallSnake.move(4);
    bigSnake.move(8);
    display(smallSnake.currentXPosition, smallSnake.currentYPosition);
    display(bigSnake.currentXPosition, bigSnake.currentYPosition);
    smallSnake.turn();
    smallSnake.move(2);
    display(smallSnake.currentXPosition, smallSnake.currentYPosition);
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
