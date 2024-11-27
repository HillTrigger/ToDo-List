import { ACTIONS } from "../constans";

export function handleSubmitInput({ e, dispatch, setTextInput }) {
  e.preventDefault();
  dispatch({
    type: ACTIONS.ADD_TODO,
    payload: { name: e.target.firstElementChild.value },
  });
  setTextInput("");
  return null;
}
