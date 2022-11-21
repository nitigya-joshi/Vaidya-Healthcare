import React from "react";
import { Button } from "@material-ui/core";

import Icon from "./Icon";

function RippleIcon(props) {
  const { icon, clickEvent } = props;

  return (
    <Button
      onClick={() => clickEvent && clickEvent()}
      style={{
        width: "initial",
        padding: "0",
        borderRadius: "50%",
        height: "initial",
        minWidth: "initial",
      }}
      color="default"
    >
      <Icon icon={`${icon}`} />
    </Button>
  );
}

export default RippleIcon;
