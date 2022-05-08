import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
  const navigate = useNavigate();
  function handleChange(e) {
    navigate(`/topics/${e.target.value}/articles`);
  }
  return (
    <div>
      <select onChange={handleChange} name="topics" className="select">
        <option className="dropdown-item"value={props.option1}>{props.option1}
        </option>
        <option className="dropdown-item" value="coding">
          Coding
        </option>
        <option className="dropdown-item" value="cooking">
          Cooking
        </option>
        <option className="dropdown-item" value="football">
          Football
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
