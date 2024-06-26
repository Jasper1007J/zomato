import React from 'react';
import './App.css'
const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div class="searchbar">
    <div class="searchbar-wrapper">
        <div class="searchbar-left">
            <div class="search-icon-wrapper">
                <span class="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>

        <div class="searchbar-center">
            <div className="searchbar-input-spacer"></div>

            <input type="text" className="searchbar-input" maxlength="2048" name="q" autocapitalize="off" autocomplete="off" title="Search"  placeholder="Restaurant name or a dish"/>
        </div>

        <div class="searchbar-right">
            <img src={require('./images/mike.png')} alt='' className='voice-search'/>
        </div>
    </div>
</div>
  );
};

export default SearchBar;
