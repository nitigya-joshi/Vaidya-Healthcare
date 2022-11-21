import styles from "./Cursor.module.css";

export const Cursor = ({
  cursorStyle = "|",
  cursorColor = "inherit",
  cursorBlink = true,
}) => {
  return (
    <span
      style={{ color: cursorColor }}
      className={cursorBlink ? styles.blinkingCursor : styles.notBlinkingCursor}
    >
      {cursorStyle}
    </span>
  );
};
