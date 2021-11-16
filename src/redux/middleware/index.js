import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];

export default composeWithDevTools(applyMiddleware(...middleware));
