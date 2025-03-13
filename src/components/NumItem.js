import React from "react";

const NumItem = ({num, select, btnStatus}) => {

   const actionButton = () => {
    select(num);
  }
    return (
        <div>
            <button
                className={`numItem ${btnStatus ? 'buttonOn' : 'buttonOff'}`}
                onClick={actionButton}>
                {num}
            </button>   
        </div>
    );
};

export default NumItem;