import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import NameShow from "./component/NameShow";

function App() {
  const [name, setName] = useState("Kamrul");
  return (
    <div>
      <Counter name={name} />
      <NameShow />
    </div>
  );
}

export default App;
