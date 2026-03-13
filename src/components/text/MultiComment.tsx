import React from "react";
import { TextToken } from "./TextTokens";

type MultiCommentProps = {
  content: string[];
};

const MultiComment = ({ content }: MultiCommentProps) => {
  return (
    <>
      {content
        .map((line, idx) => (
          <TextToken variant="comment" className="max-w-200" key={idx}>
            {line}
          </TextToken>
        ))
        .reduce(
          (acc, el, idx, arr) =>
            idx < arr.length - 1
              ? [...acc, el, <br key={`br-${idx}`} />]
              : [...acc, el],
          [] as React.ReactNode[],
        )}
    </>
  );
};

export default MultiComment;
