import { Cursor } from "./Cursor";
import { useTypewriter } from "./useTypewriter.jsx";

/**
 * A Simple React Component for adding a nice Typewriter effect to your project.
 */
export const Typewriter = ({
  words = ["Hello World!", "This is", "a simple Typewriter"],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  cursorBlink = true,
  cursor = false,
  cursorStyle = "|",
  cursorColor = "inherit",
  onLoopDone,
  onType,
}) => {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType,
  });

  return (
    <>
      <span>
        {text}
        {cursor && (
          <Cursor
            cursorStyle={cursorStyle}
            cursorColor={cursorColor}
            cursorBlink={cursorBlink}
          />
        )}
      </span>
    </>
  );
};
