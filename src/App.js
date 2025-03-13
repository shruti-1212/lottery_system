import Header from './components/Header';
import bg_img from './img/bg_img.png';
import PriceItem from './components/PriceItem';
import NumItem from './components/NumItem';
import BtnItem from'./components/BtnItem';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const prices = [1,5,10,20];

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectnum, setSelectnum] = useState([]);
  const [displayTotal, setDisplayTotal] = useState(false)

  const addPrice = (pr) => {
    if (totalPrice + pr > 100) {
      alert("Total cash cannot exceed $100!");
      return;
    }
    setTotalPrice(prevTotal => prevTotal + pr);
  };

  const addNum = (num) => {
    if (selectnum.includes(num)) {
      setSelectnum(selectnum.filter(n => n !== num));
    } else if (selectnum.length < 5) {
      setSelectnum([...selectnum, num]);
    } else {
      alert("Only 5 selections allowed!");
    }
  };

  const clickClear = () => {
    setSelectnum([]);
    setTotalPrice(0);
    setDisplayTotal(false); //Hides total when clearing
  };

  const clickRandom = () => {
    const shuffleNum = [...numbers];
    for (let i = shuffleNum.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleNum[i], shuffleNum[j]] = [shuffleNum[j], shuffleNum[i]];
    }
    setSelectnum(shuffleNum.slice(0, 5));
  };

  const clickCash = () => {
    if (selectnum.length < 5) {
      alert("Please select 5 numbers first!");
      return;
    }
    if (totalPrice === 0) {
      alert("Please add some money before proceeding!");
      return;
    }
    setDisplayTotal(true); //Show total price when pressing "CASH"
  };

  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='container'>
        <div className='leftside'>
          <img src={bg_img} alt='balls for the game' />
          <div className='priceList'>
            {prices.map((pr) => (
              <PriceItem pr={pr} key={pr} addpr={addPrice} available={selectnum.length === 5} />
            ))}
          </div>
        </div>

        <div className='middle'>
          <div className='numList'>
            {numbers.map((num) => (
              <NumItem num={num} key={num} select={addNum} btnStatus={selectnum.includes(num)} />
            ))}
          </div>
          <div className='btnItem'>
            <BtnItem optbtn="CLEAR" clickButton={clickClear} />
            <BtnItem optbtn="RANDOM" clickButton={clickRandom} />
          </div>
        </div>

        {/* Sidebar is always visible, but total price depends on displayTotal */}
        <div className='rightside'>
          <Sidebar selectnum={selectnum} totalPrice={totalPrice} displayTotal={displayTotal} />
          <BtnItem optbtn="CASH" clickButton={clickCash} />
        </div>
      </div>
    </div>
  );
}

export default App;
