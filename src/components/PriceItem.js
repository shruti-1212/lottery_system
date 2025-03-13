import React from "react";

const PriceItem =({pr,addpr, available})=>{

  const priceCountButton = () =>{
    if(available === true){
      addpr(pr);
    }
    else{
      alert("Please select 5 numbers before choosing a price");
    }
  }
    return(
        <div className='priceItem'>
          <button className="prBtn" onClick={priceCountButton}>$ {pr}</button>
          
        </div>
    )
}

export default PriceItem