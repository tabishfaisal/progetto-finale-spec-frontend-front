import { createContext, useState, useEffect } from "react";
import axios from "axios";
const Url = import.meta.env.VITE_API_URL;

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [laptops, setLaptops] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get(`${Url}/laptops`);
        console.log(res.data);
        setLaptops(res.data);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      }
    };

    fetchLaptops();
  }, []);

  const handleFavorite = (laptop) => {
    if (!favorites.find((f) => f.id === laptop.id)) {
      setFavorites([...favorites, laptop]);
      alert("Added to your wishlist");
    }
  };

  const handleRemove = (laptop) => {
    setFavorites(favorites.filter((f) => f.id !== laptop.id));
    alert("Laptop removed");
  };


  return (
    <GlobalContext.Provider
      value={{
        laptops,
        favorites,
        handleFavorite,
        handleRemove
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
