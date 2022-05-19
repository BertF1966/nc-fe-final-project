import React, { useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";

export default function AscDesc({value}) {
  const [order, setOrder] = useState("asc");
  const [searchParams, setSearchParams] = useSearchParams({})
  const query = searchParams.get('order')
  // console.log(order, ' <<<< order')
  // console.log(query, '<<<< query')



  useEffect(() => {
    return (
      order
  )}, [query, order])

    function toggle(e) {
      setOrder(e.target.value);
      setSearchParams({order: e.target.value})
      // console.log(e.target.value, '<<<< e.target.value')

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
