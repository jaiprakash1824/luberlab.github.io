import React, { useState } from 'react';
import './JobSidebar.css';
import data from '../../../public/assets/data/jobs.json';

const JobSidebar = ({ setSelectedCategory, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { categories } = data;

  const filteredCategories = searchTerm
    ? categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categories;

  const handleCategoryClick = category => {
    if (selectedCategory === category) {
      setSelectedCategory(''); 
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search categories"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="category-list">
        {filteredCategories.map((category) => (
          <li
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={selectedCategory === category.name ? 'active' : ''}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSidebar;