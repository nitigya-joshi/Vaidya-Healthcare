import React, { useState } from "react";
import { Typewriter } from "./Typewritter/Typewriter";

function TypeOnLoad(props) {
  const [cursor, setCoursor] = useState(true);
  const { text } = props;

  return (
    <Typewriter
      words={[text]}
      loop={1}
      typeSpeed={100}
      cursor={cursor}
      cursorBlink={false}
      onLoopDone={() => setCoursor(false)}
    />
  );
}

export default TypeOnLoad;
