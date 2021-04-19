import React from "react";

export const Description = ({
  cardDescription,
  setCardDescription,
  makeBold,
  setMakeBold,
  makeItalic,
  setMakeItalic,
  makeUnderline,
  setMakeUnderline,
}) => {
  const bold = makeBold ? "bold" : "normal";
  const italic = makeItalic ? "italic" : "normal";
  const underline = makeUnderline ? " underline" : "none";

  return (
    <div className="description">
      <span className="description-header">
        <button
          type="button"
          className="formatters"
          onClick={() => (makeBold ? setMakeBold(false) : setMakeBold(true))}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="formatters"
          onClick={() =>
            makeItalic ? setMakeItalic(false) : setMakeItalic(true)
          }
        >
          <em>I</em>
        </button>
        <button
          type="button"
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
