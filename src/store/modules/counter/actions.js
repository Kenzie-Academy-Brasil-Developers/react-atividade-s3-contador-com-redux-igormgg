import { ADD, SUB } from "./actionTypes";

export const addNumber = (payload) => ({ type: ADD, payload });

export const subNumber = (payload) => ({ type: SUB, payload });
