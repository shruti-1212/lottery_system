import React from 'react'


const BtnItem = ({optbtn, clickButton}) => {
  return (
    <div>
        <button className= {`${optbtn}` } onClick={clickButton}>{optbtn}</button>
    </div>
  )
}
export default BtnItem