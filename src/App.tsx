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
    smallSnake.move(4);
    bigSnake.move(8);
    smallSnake.turn();
    earth.update(6);
    display(earthSnake.position.x, earthSnake.position.y);
    display(earthSnake.direction);
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
