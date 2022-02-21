import React from "react";
import Backdrop from "./Backdrop";
import AddCostForm from "./AddCostForm";

function AddCostModal() {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen ">
      <Backdrop />
      <AddCostForm />
    </div>
  );
}

export default AddCostModal;
