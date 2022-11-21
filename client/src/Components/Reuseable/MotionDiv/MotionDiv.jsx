import React from "react";
import { motion } from "framer-motion";

function MotionDiv(props) {
  const { html } = props;
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div variants={pageTransition} exit="out" animate="in" initial="out">
      {html}
    </motion.div>
  );
}

export default MotionDiv;
