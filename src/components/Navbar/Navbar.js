import React from "react";
import NavForm from "./NavForm";
import NavList from "./NavList";
import { Heading } from "../Heading/Heading";

function Navbar(props) {
  return (
    <Heading>
      <NavList />
      <NavForm changeCity={props.changeCity} updateCity={props.updateCity} />
    </Heading>
  );
}

export default Navbar;
