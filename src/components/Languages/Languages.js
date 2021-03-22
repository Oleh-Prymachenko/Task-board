import React, { useContext, useEffect } from "react";
import { FormattedMessage } from "react-intl";

import "./languages.scss";
import { LangContext } from "../../context/langContext";

export const Languages = () => {
  const F = FormattedMessage;
  const languageSwitchContext = useContext(LangContext);

  useEffect(() => {
    languageSwitchContext.defaultLanguage();
  }, []);
  return (
    <div className="languages">
      <button
        value="eng"
        className="super"
        onClick={languageSwitchContext.chooseLanguage}
      >
        <F id="eng" />
      </button>
      <button
        value="rus"
        className="super"
        onClick={languageSwitchContext.chooseLanguage}
      >
        <F id="ukr" />
      </button>
      <button
        value="ukr"
        className="super"
        onClick={languageSwitchContext.chooseLanguage}
      >
        <F id="rus" />
      </button>
    </div>
  );
};
