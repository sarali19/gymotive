import React, { useEffect, useState } from "react";
import { Button, Input } from "@mantine/core";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  function addToCounter() {
    setCounter(counter + Number(value));
  }

  useEffect(() => {
    console.log("Hello there");
  }, [counter, value]);

  return (
    <div>
      <div>
        <Input onChange={(e) => setValue(e.target.value)} />
        <Button onClick={addToCounter} disabled={!value || !Number(value)}>
          Add to counter
        </Button>
      </div>
      <div>
        <Button onClick={() => setCounter(counter - 1)} disabled={counter === 0}>
          -
        </Button>
        <span style={{ fontSize: 24 }}>{counter}</span>
        <Button onClick={() => setCounter(counter + 1)} disabled={counter === 10}>
          +
        </Button>
        <div>
          <Button onClick={() => setCounter(0)}>reset</Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
