import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Rus from '../lang/ukr.json';
import Ukr from '../lang/rus.json';
import Eng from '../lang/eng.json';

export const LangContext = React.createContext();

const local = navigator.language;

let lang;
if (local === 'rus') {
    lang = Rus;
} else if (local === 'eng') {
    lang = Eng;
    } 
    else {
    lang = Ukr;
    }


const LangProvider = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function defaultLanguage() {
        setMessages(Eng)
    }

    function chooseLanguage(e){
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'rus') {
            setMessages(Rus);
    } else if(newLocale==='eng'){
        setMessages(Eng);
    } else {
        setMessages(Ukr);
    }
}

    return (
        <LangContext.Provider value = {{locale,  chooseLanguage, defaultLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </LangContext.Provider>
    );
}


export default LangProvider;