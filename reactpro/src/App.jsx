import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponents from "./components/ConditionalComponents";
import Message from "./components/Message";
import Count from "./components/Count";
import Form from "./components/Form";

function App() {
  const person = {
    name: "Simon",
    message: "Hi there!",
    emoji: "🫶",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
