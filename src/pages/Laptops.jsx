import { GlobalContext } from '../Context/GlobalContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Laptops = () => {
  const { laptops, handleFavorite } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [];
  laptops.forEach(l => {
  if (!categories.includes(l.category)) {
    categories.push(l.category);
  }
  });


  const handleSearchBar = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };


  const laptopsToShow = laptops
    .filter((l) => {
      // Filter by search query
      return l.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((l) => {
      // Filter by selected category
      if (selectedCategory === '') return true;
      return l.category.toLowerCase() === selectedCategory.toLowerCase()
    })
    .sort((a, b) => {
      // Sorting by title
      if (sortOrder === 'asc') return a.title.localeCompare(b.title);
      if (sortOrder === 'desc') return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <>
      <form className="search-form">
        <span className="search-icon">🔍</span>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchBar(e.target.value)}
          placeholder="Search laptops..."
          className="search-input"
        />

        <select className="select-order" onChange={handleSortChange} value={sortOrder}>
          <option value="">Sort by</option>
          <option value="asc">Title: A → Z</option>
          <option value="desc">Title: Z → A</option>
        </select>

        <select className="select-category" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </form>

      <div className="container">
        {laptopsToShow.map((l) => (
          <div className="row" key={l.id}>
            <Link to={`/laptops/${l.id}`}>
              <h2>{l.title}</h2>
            </Link>
            <p><strong>Category: </strong>{l.category}</p>
            <button onClick={() => handleFavorite(l)}>Add to wishList ♡</button>
          </div>
        ))}
        {laptopsToShow.length === 0 && (
          <p className="not-found">Sorry, no laptops Matched your search</p>
        )}
      </div>
    </>
  );
};

export default Laptops;





