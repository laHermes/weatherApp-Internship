import React, {useRef} from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Search } from "../Search/Search";

function NavForm(props) {

  const inputRef = useRef();
  
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <form onSubmit={props.changeCity}>
      <Search>
        <FaSearchLocation
          onClick={focus}
          className="icon"
          size="1rem"
          color="#4f4f4f"
        />
        <input
          ref={inputRef}
          onKeyUp={props.updateCity}
          type="text"
          placeholder="Enter the name of the city"
        />
      </Search>
    </form>
  );
}

export default NavForm;
