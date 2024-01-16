import "./App.css";
import "./App.css";
import Snake from "./Snake";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    const smallSnake = new Snake("green");
    const bigSnake = new Snake("red");
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
    display(smallSnake.Position);
    display(bigSnake.Position);
    smallSnake.move(4);
    bigSnake.move(8);
    display(smallSnake.Position);
    display(bigSnake.Position);
    smallSnake.turn();
    smallSnake.move(2);
    display(smallSnake.Position);
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
