import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware, compose } from "redux";

const middleware = [thunk, logger];

export default compose(
  applyMiddleware(...middleware),
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);