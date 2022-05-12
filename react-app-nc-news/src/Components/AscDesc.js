import React, { useState, useEffect } from "react";



export default function AscDesc({ value }) {
  // console.log(order, '<<<order');
  useEffect(() => {}, [order])
  const [order, setOrder] = useState(value);
  
  
  function toggle (e) {
    // console.log(e.target.value, '<<<e.target.value') 
    setOrder(!order ? {order: e.target.value} : {order: e.target.value}  )
  }
  
  
  return (
    <div className="asc-desc">
      <select name='asc' onChange={toggle} value={order} className="asc-desc-button">
      <option className="dropdown-item" value="asc">Ascending</option>
      <option className="dropdown-item" value="desc">Descending</option>
      </select>
    </div>
  );
};

