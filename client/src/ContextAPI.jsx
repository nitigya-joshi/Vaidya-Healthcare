import React, { createContext, useRef, useState } from "react";

export const ContextApp = createContext();

function ContextAppProvider(props) {
  const [scrolled, setScrolled] = useState(false);
  const notifisystem = useRef();
  const [keyword, setKeyword] = useState("");

  return (
    <ContextApp.Provider
      value={{
        scrolled,
        setScrolled,
        notifisystem,
        keyword,
        setKeyword,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
}

export default ContextAppProvider;
