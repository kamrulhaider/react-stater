import Paragraph from "./Paragraph";

function Welcome({ name, age, education = "BBA" }) {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Education: {education}</h2>
      <Paragraph />
    </div>
  );
}

export default Welcome;
