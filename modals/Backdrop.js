import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../store/form-modal-slice";
function Backdrop() {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggle());
  };
  return (
    <div
      onClick={toggleModal}
      className="fixed bg-black/40 top-0 left-0 w-screen h-screen"
    ></div>
  );
}

export default Backdrop;
