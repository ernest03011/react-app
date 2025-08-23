import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./MyButton.jsx";
import MyCard from "./MyCard.jsx";
import MyButton from "./MyButton.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MyCard reactLogo={reactLogo} viteLogo={viteLogo} />
      </div>
      <h1>This is a react project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
        <p>Show me the count in this paragraph: {count}</p>
      </div>
      <MyButton />
    </>
  );
}

export default App;
