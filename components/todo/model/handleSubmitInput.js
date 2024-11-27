import { ACTIONS } from "../constans";

export function handleSubmitInput({ e, dispatch }) {
  e.preventDefault();
  dispatch({
    type: ACTIONS.ADD_TODO,
    payload: { name: e.target.firstElementChild.value },
  });
  return null;
}
