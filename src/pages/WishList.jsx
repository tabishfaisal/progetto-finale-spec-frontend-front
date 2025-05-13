import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

const WishList = () => {
  const { favorites, handleRemove } = useContext(GlobalContext);

  if (favorites.length === 0) {
    return (
      <div className="wishlist-container">
        <h2 className="wishlist-title">No favorites yet!</h2>
        <p style={{ textAlign: 'center', color: '#888' }}>
          Add some items to your wishlist to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Your Wishlist ❤️</h1>
      <div className="wishlist-grid">
        {favorites.map((f) => (
          <div key={f.id} className="wishlist-card">
            <h2>{f.title}</h2>
            <p>Category: {f.category}</p>
            <button className="remove-btn" onClick={()=>handleRemove(f)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

