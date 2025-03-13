import React from 'react';

const Sidebar = ({ selectnum, totalPrice, displayTotal }) => {
  return (
    <div className='sidebar'>
      <p><strong>Numbers Selected:</strong></p>
      {selectnum.length === 0 ? <p>No numbers selected</p> : 
        selectnum.map(num => <p key={num}>Mark: {num}</p>)
      }

      {/* Show total price only if displayTotal is true */}
      {displayTotal && <p><strong>Total Price:</strong> ${totalPrice}.00</p>}
    </div>
  );
};

export default Sidebar;
