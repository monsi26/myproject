import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponents() {
  let message;

  const display = false;

  return display ? <h2>Message 1</h2> : <h1>Message 2</h1>;

  return message;
}
