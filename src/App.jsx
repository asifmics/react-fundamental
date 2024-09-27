import Hello from "./components/Hello";
import Title from "./components/Title";

const person = {
  name: "Asif",
  age: 20,
  division: "Dhaka",
};

const amounts = [100, 200, 300];

function App() {
  return (
    <>
      <Hello />

      <Title name="Mics" age="34" student={person} amounts={amounts} />
    </>
  );
}

export default App;
