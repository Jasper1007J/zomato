import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './Searchbar';
import Item from './Item';
import './App.css'
import { NavLink } from 'react-router-dom';
const Home = () => {
  // State for search input
  const [searchInput, setSearchInput] = useState('');

  // Mock data for items
  const items = [
    { id: 1, name: 'Pizza', image: 'pizza.png' },
    { id: 2, name: 'Juices', image: 'Juices.png' },
    { id: 3, name: 'Vegetable Salaad', image: 'salad.png' },
    { id: 4, name: 'Crabs', image: 'Food2.png'},
    { id: 5, name: 'Pasta', image: 'pasta.png'},
    { id: 6, name: 'Burger', image: 'burger.png'},
    { id: 7, name: 'Fried Rice', image: 'fried-rice.png'},
    { id: 8, name: 'Burger', image: 'burger.png'},
    { id: 9, name: 'Paneer', image: 'paneer.png'},
    { id: 10, name: 'Chinese', image: 'pasta2.png'}
    // Add more items as needed
  ];

  const restaurants = [
    {id: 1, name:'ABC Fast Foods', image: 'rest-1.jpg', timer: '40 mins', distance:'3.2 km',rating:'3.8',food1:'Biryani',food2:'North Indian',food3:'200 for one',offer:'20% OFF up to Rs.50 + Free Delivery'},
    {id: 2, name:'Udipi Restaurant', image: 'rest-2.jpg', timer: '20 mins', distance:'5.2 km',rating:'4.5',food1:'Pizza',food2:'Burger',food3:'300 for one',offer:'20% OFF up to Rs.50 '},
    {id: 3, name:'Prashanti Hotel', image: 'rest-1.jpg', timer: '55 mins', distance:'3 km',rating:'3.6',food1:'Street Food',food2:'South Indian',food3:'150 for one',offer:'40% OFF up to Rs.100 '},
    {id: 4, name:'Alfa Biryani Hub', image: 'rest-2.jpg', timer: '25 mins', distance:'2.8 km',rating:'4.5',food1:'Biryani',food2:'North Indian',food3:'200 for one',offer:'10% OFF up to Rs.20 + Free Delivery'},
    {id: 5, name:'Pizza Day', image: 'rest-1.jpg', timer: '50 mins', distance:'4 km',rating:'2.8',food1:'Pizza',food2:'Bevarges',food3:'300 for one',offer:'30% OFF up to Rs.130 '},
    {id: 6, name:'Dominos', image: 'rest-2.jpg', timer: '30 mins', distance:'3 km',rating:'4.8',food1:'Burger',food2:'North Indian',food3:'100 for one',offer:'25% OFF up to Rs.100 '},

  ];

  const [restaurant_number, setRestaurant_number] = useState(17000);

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

      <div className='explore'>
      <hr></hr>
      <p>EXPLORE</p>
      <hr></hr>  
      </div>

      <div className='advertisement'>
      <div className='ad-content'>
            <h2>Offers </h2>
            <p>Upto 60% OFF, Flat Discounts, and other great offers</p>
           </div>
           <div className='ad-img'>
           <img src={require('./images/gift.png')} alt=''/>
           </div>
      </div>

      <div className='mind'>
      <hr></hr>
      <p>WHAT'S ON YOUR MIND?</p>
      <hr></hr>  
      </div>
      {/* List of items */}
      <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-row">
        <div className="horizontal-scroll-content">
          {/* Add your first row of horizontally scrollable content here */}
          {/* Example content */}
          {filteredItems.map(item => (
          <Item key={item.id} name={item.name} image={item.image} />
        ))}
          {/* Add more items as needed */}
        </div>
      </div>
      <div className="horizontal-scroll-row">
        <div className="horizontal-scroll-content">
          {/* Add your second row of horizontally scrollable content here */}
          {/* Example content */}
          {filteredItems.map(item => (
          <Item key={item.id} name={item.name} image={item.image} />
        ))}
          {/* Add more items as needed */}
        </div>
      </div>
    </div>

    <div className='all-rest'>
      <hr></hr>
      <p>ALL RESTAURANTS</p>
      <hr></hr>  
      </div>

        <div className='sort-group'>
          <div>
            <img src={require('./images/filters.png')} alt='' className='filter-img'/>
            <label>Sort</label>
            <img src={require('./images/caret-down.png')} alt='' className='sort-img'/>
          </div>
          <div className='new-tag-group'>
            <label className='new-tag'>New</label>
            <label>Near and Fast</label>
          </div>
          <div>Great Offers</div>
        </div>



        <div className='rest-text'>
        {restaurant_number} restaurants delivering to you
        </div>

        <div className='rest-text text'>
          FEATURED
        </div>

        <div className='restaurants'> 
        {restaurants.map(rest =>(
         <NavLink to='/' className='navlink'>
           <div className='rest-count'>
            
            <div className='rest-img'>
              <img src={require(`./images/${rest.image}`)} alt=''/>

            </div>
            <div className='rest-content'>
            <label className='time' > 
              <img src={require(`./images/timer.png`)} alt='40 mins' className='timer'/> <label>{rest.timer}  <img src={require('./images/dot.png')} alt='' className='dot'/>  {rest.distance}</label>
            </label>
              <div className='rest-name-group'>
              <div className='rest-name'>{rest.name}</div>
              <div className='rest-rating'>{rest.rating} <img src={require('./images/star.png')} alt='' /> </div>
              </div>
              <div className='rest-food'>
                <div>{rest.food1}</div> <img src={require('./images/dot.png')} alt='' className='dot'/> 
                <div>{rest.food2}</div> <img src={require('./images/dot.png')} alt='' className='dot'/> 
                <div>{rest.food3}</div>
                </div>
              <hr></hr>
              <div className='offer'>
                <img src={require('./images/discount.png')} alt='' className='discount'/>
                <div className='offer-text'>{rest.offer}</div>
              </div>
            </div>
            </div>
         </NavLink>
        ))}
        </div>

    </div>
  );
};

export default Home;
