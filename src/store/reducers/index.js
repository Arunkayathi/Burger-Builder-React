import { combineReducers } from "redux";
import ingredientsReducer from "./reducer";
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
  ingredientsState: ingredientsReducer,
  form: formReducer
});

export default rootReducer;
