import React, { createContext, useState } from "react";

export const ContextApp = createContext();

function ContextAppProvider(props) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <ContextApp.Provider
      value={{
        scrolled,
        setScrolled,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
}

export default ContextAppProvider;
