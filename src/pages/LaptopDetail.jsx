import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";
const Url = import.meta.env.VITE_API_URL;

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const { handleFavorite } = useContext(GlobalContext);

  const laptopID = parseInt(id);

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const res = await axios.get(`${Url}/laptops/${laptopID}`);
        setLaptop(res.data.laptop);
      } catch (error) {
        console.error("Error fetching laptop:", error);
      }
    };

    fetchLaptop();
  }, [laptopID]);

  if (!laptop) return <p>Sorry, Laptop not found</p>;

  return (
    <div className="laptop-detail">
      <h2>{laptop.title}</h2>
      <p><strong>Category:</strong> {laptop.category}</p>
      <p><strong>Brand:</strong> {laptop.brand}</p>
      <p><strong>Processor:</strong> {laptop.processor}</p>
      <p><strong>RAM:</strong> {laptop.ram}</p>
      <p><strong>Storage:</strong> {laptop.storage}</p>
      <p><strong>Screen Size:</strong> {laptop.screenSize}</p>
      <p><strong>Battery Life:</strong> {laptop.batteryLife}</p>
      <p><strong>Price:</strong> ${laptop.price}</p>
      <button onClick={() => handleFavorite(laptop)}>Add to Wishlist ♡</button>
    </div>
  );
};

export default LaptopDetail;


