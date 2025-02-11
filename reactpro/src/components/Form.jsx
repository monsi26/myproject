import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form action="">
        <input
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
          type="text"
          value={name.firstName}
        />

        <input
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
          type="text"
          value={name.lastName}
        />

        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
