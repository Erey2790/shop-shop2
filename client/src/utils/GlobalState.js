import React, { createContext, useContext } from React;
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

