import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchComponent = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="search-items">
        {filteredData.map((item) => (
            <Link to={`/recipe/${item.id}`} key={item.id}>
                <div className='search-item' key={item.id}>
                <h3>..{item.title}</h3>
                <img src={item.image} alt="IMAGE" />
                {/* Display other details */}
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
