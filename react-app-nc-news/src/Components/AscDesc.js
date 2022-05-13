import React, { useState, useEffect } from "react";

export default function AscDesc({ value }) {
  const [order, setOrder] = useState("asc");
  useEffect(() => {
  }, [order]);
    function toggle(e) {
      setOrder(e.target.value);
      console.log(e.target.value);
    }

    return (
      <div className="asc-desc">
        <select name="asc" onClick={toggle} className="asc-desc-button">
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
