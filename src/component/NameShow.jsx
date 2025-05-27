import { useState } from "react";

export default function NameShow() {
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input onChange={handleInput} type="text" />
      <p>{name}</p>
    </div>
  );
}
