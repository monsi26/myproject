export default function Message() {
  function handleClick() {
    console.log("The button is clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Please this button</button>
    </div>
  );
}
