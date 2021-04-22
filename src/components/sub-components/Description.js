import React, { useEffect } from "react";

export const Description = ({
  cardDescription,
  setCardDescription,
  isBold,
  setIsBold,
  isItalic,
  setIsItalic,
  isUnderline,
  setIsUnderline,
  bold,
  italic,
  underline,
}) => {
  useEffect(() => {
    // return () => {};
  }, []);

  // const bold = ;
  // const italic = ;
  // const underline = ;

  return (
    <div className="description">
      <span className="description-header">
        <button
          type="button"
          className="formatters"
          onClick={() => {
            isBold ? setIsBold(false) : setIsBold(true);
          }}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="formatters"
          onClick={() => (isItalic ? setIsItalic(false) : setIsItalic(true))}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          className="formatters"
          onClick={() =>
            isUnderline ? setIsUnderline(false) : setIsUnderline(true)
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
          fontStyle: isItalic ? "italic" : "normal",
          fontWeight: isBold ? "bold" : "normal",
          textDecorationLine: isUnderline ? " underline" : "none",
        }}
      />
    </div>
  );
};
