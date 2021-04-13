import React, { useState, useEffect } from "react";
import { Card } from "../components/TaskCard/Card";

export const useLocalStorageStringState = (localStorageKey) => {
  const [str, setStr] = useState(localStorage.getItem(localStorageKey) || [""]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, str);
    console.log("S");
  }, [str]);
  return [str, setStr];
};

export const useLocalStorageNumberState = (localStorageKey) => {
  const [num, setNum] = useState(localStorage.getItem(localStorageKey) || [1]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, Number(num));
    console.log("N");
  }, [num]);
  return [Number(num), setNum];
};

export const useLocalStorageDateState = (localStorageKey) => {
  const [date, setDate] = useState(
    localStorage.getItem(localStorageKey) || [new Date()]
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, date);
    console.log("D");
  }, [date]);

  return [date, setDate];
};

export const useLocalStorageComponentState = (localStorageKey) => {
  const [comp, setComp] = useState(
    localStorage.getItem(localStorageKey) || [<Card />]
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, comp);
    console.log("Component", JSON.stringify(comp, true, 2));
  }, [comp]);

  return [comp, setComp];
};
