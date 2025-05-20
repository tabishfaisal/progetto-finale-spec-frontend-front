import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import axios from 'axios';

const Url = import.meta.env.VITE_API_URL;

const Comparison = () => {
  const { laptops, handleFavorite } = useContext(GlobalContext);

  const [selectLeft, setSelectLeft] = useState("");
  const [selectRight, setSelectRight] = useState("");

  const [leftLaptopInfo, setLeftLaptopInfo] = useState([]);
  const [rightLaptopInfo, setRightLaptopInfo] = useState([]);

  const handleLeftChange = (e) => {
    const value = e.target.value;
    if (value !== selectRight) {
      setSelectLeft(value);
    } else {
      alert('You cannot select the same laptop in both sides.');
    }
  };

  const handleRightChange = (e) => {
    const value = e.target.value;
    if (value !== selectLeft) {
      setSelectRight(value);
    } else {
      alert('You cannot select the same laptop in both sides.');
    }
  };

  useEffect(() => {
    if (!selectLeft) return;

    axios.get(`${Url}/laptops/${selectLeft}`)
      .then((res) => setLeftLaptopInfo([res.data.laptop]))
      .catch((error) => console.error("Error fetching left laptop:", error));
  }, [selectLeft]);


  useEffect(() => {
    if (!selectRight) return;

    axios.get(`${Url}/laptops/${selectRight}`)
      .then((res) => setRightLaptopInfo([res.data.laptop]))
      .catch((error) => console.error("Error fetching right laptop:", error));
  }, [selectRight]);


  return (
    <div>
      <div className="select-container">
        <select
          value={selectLeft}
          onChange={handleLeftChange}
        >
          <option className='option' value="">Select Laptop</option>
          {laptops.map((l) => (
            <option key={l.id} value={l.id}>
              {l.title}
            </option>
          ))}
        </select>

        <select
          value={selectRight}
          onChange={handleRightChange}
        >
          <option value="">Select Laptop</option>
          {laptops.map((l) => (
            <option key={l.id} value={l.id}>
              {l.title}
            </option>
          ))}
        </select>
      </div>

      <div className="compare-container">
        {leftLaptopInfo.map((left) => (
          <div className='compare-detail' key={left.id}>
            <h2>{left.title}</h2>
            <p><strong>Category:</strong> {left.category}</p>
            <p><strong>Brand:</strong> {left.brand}</p>
            <p><strong>Processor:</strong> {left.processor}</p>
            <p><strong>RAM:</strong> {left.ram}</p>
            <p><strong>Storage:</strong> {left.storage}</p>
            <p><strong>Screen Size:</strong> {left.screenSize}</p>
            <p><strong>Battery Life:</strong> {left.batteryLife}</p>
            <p><strong>Price:</strong> ${left.price}</p>
            <button onClick={() => handleFavorite(left)}>Add to Wishlist ♡</button>
          </div>
        ))}
        {rightLaptopInfo.map((r) => (
          <div className='compare-detail' key={r.id}>
            <h2>{r.title}</h2>
            <p><strong>Category:</strong> {r.category}</p>
            <p><strong>Brand:</strong> {r.brand}</p>
            <p><strong>Processor:</strong> {r.processor}</p>
            <p><strong>RAM:</strong> {r.ram}</p>
            <p><strong>Storage:</strong> {r.storage}</p>
            <p><strong>Screen Size:</strong> {r.screenSize}</p>
            <p><strong>Battery Life:</strong> {r.batteryLife}</p>
            <p><strong>Price:</strong> ${r.price}</p>
            <button onClick={() => handleFavorite(r)}>Add to Wishlist ♡</button>
          </div>
        ))}
        {(leftLaptopInfo.length === 0 || rightLaptopInfo.length === 0) && (
          <div>
            <h2 style={{ textAlign: 'center' }}>No laptops selected yet!</h2>
            <p style={{ textAlign: 'center', color: 'grey' }}>Select Two Laptops for Comparison</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comparison;

