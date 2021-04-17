import React, { useState } from "react";

export const Description = ({ cardDescription, setCardDescription }) => {
  const [makeBold, setMakeBold] = useState(false);
  const [makeItalic, setMakeItalic] = useState(false);
  const [makeUnderline, setMakeUnderline] = useState(false);

  const bold = makeBold ? "bold" : "normal";
  const italic = makeItalic ? "italic" : "normal";
  const underline = makeUnderline ? " underline" : "none";

  return (
    <div className="description">
      <span className="description-header">
        <button
          className="formatters"
          onClick={() => (makeBold ? setMakeBold(false) : setMakeBold(true))}
        >
          <strong>B</strong>
        </button>
        <button
          className="formatters"
          onClick={() =>
            makeItalic ? setMakeItalic(false) : setMakeItalic(true)
          }
        >
          <em>I</em>
        </button>
        <button
          className="formatters"
          onClick={() =>
            makeUnderline ? setMakeUnderline(false) : setMakeUnderline(true)
          }
        >
          <u>U</u>
        </button>
      </span>
      <textarea
        value={cardDescription}
        onChange={(e) => setCardDescription(e.target.value)}
        rows="5"
        className="description-text"
        style={{
          fontStyle: italic,
          fontWeight: bold,
          textDecorationLine: underline,
        }}
      />
    </div>
  );
};
