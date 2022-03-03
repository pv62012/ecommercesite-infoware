import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { letterContainerVariants, letterVariants } from "./AnimationVariants";

const StyledTitleElement = styled(motion.h2)`
  // font-family: poppins;
  // text-transform: uppercase;

  // position: relative;
  display: inline-block;

  word-break: break-word;
`;

export const AnimatedTitle = ({ children, currentInView }) => {
  return (
    <AnimatePresence>
      {currentInView && (
        <StyledTitleElement
          variants={letterContainerVariants}
          initial={"before"}
          animate={"after"}
          exit={"before"}
          key={children}
          aria-label={children}
          aria-live={"polite"} // dont do this on production if it loops.
        >
          {children.split(" ").map((word, wordI) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: "inline-block",
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "auto",
                  }} // Position elements
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {"\u00A0"}
            </div>
          ))}
        </StyledTitleElement>
      )}
    </AnimatePresence>
  );
};
