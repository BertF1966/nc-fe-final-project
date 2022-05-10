import React, {useState} from 'react'

const AscDesc = (props) => {
    console.log(props.value)
    const [order, setOrder] = useState('')

    function toggle() {
      setOrder()
    }
  return (
    <div>
      <button value={props.value} onClick={toggle} className='asc-desc-button'>Asc/Desc</button>
    </div>
  )
}

export default AscDesc
