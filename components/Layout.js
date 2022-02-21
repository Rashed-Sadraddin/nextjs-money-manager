import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <Header />
      <main className="h-full overflow-y-auto">{children}</main>
    </div>
  );
}

export default Layout;
