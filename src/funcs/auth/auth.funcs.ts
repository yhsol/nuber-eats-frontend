import { LCOALSTORAGE_TOKEN } from "../../constants/auth.const";
import { isValidWindow } from "../window/isValidWindow";

export const getToken = () =>
  isValidWindow ? localStorage.getItem(LCOALSTORAGE_TOKEN) : null;

export const setToken = (token: string = "") =>
  localStorage.setItem(LCOALSTORAGE_TOKEN, token);
