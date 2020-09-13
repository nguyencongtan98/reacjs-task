import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Controll() {
  return (
    <form className="form-inline mt-3">
      {/* Searh */}
      <Search/>
      <Sort/>
    </form>
  );
}

export default Controll;
