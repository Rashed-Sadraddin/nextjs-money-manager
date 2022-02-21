import React from "react";
import Link from "next/Link";
import Logo from "./Logo";
import AddButton from "./AddButton";

function Header() {
  const headerClasses = `
  flex 
  justify-between 
  items-center 
  bg-primary 
  w-full 
  h-20 
  px-5 
  fixed 
  left-0 
  top-0 
  lg:px-20
    `;
  return (
    <div className={headerClasses}>
      <Logo />
      <AddButton />
    </div>
  );
}

export default Header;
