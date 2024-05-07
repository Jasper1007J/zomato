import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './Searchbar';
import Item from './Item';
import './App.css'
const Home = () => {
  // State for search input
  const [searchInput, setSearchInput] = useState('');

  // Mock data for items
  const items = [
    { id: 1, name: 'Pizza', image: 'https://image.similarpng.com/very-thumbnail/2022/06/Fresh-delicious-pizza-on-transparent-background-PNG.png' },
    { id: 2, name: 'Burger', image: 'https://p7.hiclipart.com/preview/203/765/310/5bbdabeedd193.jpg' },
    { id: 3, name: 'Sushi', image: 'https://image.similarpng.com/very-thumbnail/2022/02/Sushi-roll-with-mixed-ingredients-isolated-on-transparent-background-PNG.png' },
    // Add more items as needed
  ];

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter items based on search input
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Handle search button click (optional)
  const handleSearchButtonClick = () => {
    // Add search functionality here
  };

  return (
    <div>
     <div className='Nav'>
        <div>
             {/* Navbar */}
        <Navbar />
        </div>

       <div>
         {/* Search bar */}
         <SearchBar
        value={searchInput}
        onChange={handleSearchInputChange}
        onSearch={handleSearchButtonClick}
        />
       </div>
     </div>

      <div className='advertisement'>
       <div className='ad-content'>
        <label>Get 6 FREE deliveries of just 6 </label>
       </div>
       <div >
       <img src={require('./images/delivery boy.png')} alt=''/>
       </div>
      </div>
      {/* List of items */}
      <div className="item-list">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;
