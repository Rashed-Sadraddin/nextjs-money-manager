import { toggle } from "../store/form-modal-slice";
import { useDispatch } from "react-redux";

function AddButton() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(toggle());
  };
  return (
    <button
      onClick={clickHandler}
      className="bg-light p-3 text-primary font-bold rounded-xl"
    >
      <span className="text-2xl px-3 sm:px-0 sm:text-lg">+ </span>
      <span className="hidden sm:inline">Add</span>
    </button>
  );
}

export default AddButton;
