import React,{useContext,useEffect} from 'react'

import './languages.scss';
import { LangContext } from "../../context/langContext";

export const Languages =  () => {
  const languageSwitchContext = useContext(LangContext);

  useEffect(() => {
    languageSwitchContext.defaultLanguage();
  },[])
    return(
        <div className="languages">
          <button value="eng" onClick={languageSwitchContext.chooseLanguage}>eng</button>
          <button value="rus" onClick={languageSwitchContext.chooseLanguage}>ukr</button>
          <button value="ukr" onClick={languageSwitchContext.chooseLanguage}>rus</button>
        </div>
    );
}