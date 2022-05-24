import React from "react";

export default function AscDesc({setOrder}) {

    function toggle(e) {
      setOrder(e.target.value);
    }

    return (
      <div className="asc-desc">
        <select name="asc" onChange={toggle} className="asc-desc-button">
          <option className="dropdown-item" value="asc">
            Ascending
          </option>
          <option className="dropdown-item" value="desc">
            Descending
          </option>
        </select>
      </div>
    );
}
