import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard'; // Import the ServiceCard component

// Mock data
const servicesData = [
  {
    id: 1,
    photo: 'https://via.placeholder.com/150', // Dummy image
    name: 'Math Tutoring',
    provider: 'Jane Doe',
    points: 50,
    stars: 4.5,
  },
  {
    id: 2,
    photo: 'https://via.placeholder.com/150',
    name: 'Science Tutoring',
    provider: 'John Smith',
    points: 70,
    stars: 4.8,
  },
  // ... other services
];

const ServicesView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inBudget, setInBudget] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  // Function to render services
  const renderServices = () => {
    // Apply filters to servicesData as needed
    // Here we can integrate with real filtering logic in the future
    return servicesData.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ));
  };

  // Placeholder functions for future filter implementations
  const handleCategoryFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubcategoryFilterChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleSearch = () => {
    // Placeholder for search functionality
  };

  return (
    <div>
      <div className="title-bar">
        <h1>Services</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search services..."
        />
        <button onClick={handleSearch}>
          <i className="search-icon">🔍</i>
        </button>
      </div>
      <div className="filters-row">
        <label>
          <input
            type="checkbox"
            checked={inBudget}
            onChange={(e) => setInBudget(e.target.checked)}
          />
          In my budget
        </label>
        <select value={selectedCategory} onChange={handleCategoryFilterChange}>
          <option value="">Select Category</option>
          {/* Categories would be mapped over here */}
        </select>
        <select value={selectedSubcategory} onChange={handleSubcategoryFilterChange} disabled={!selectedCategory}>
          <option value="">Select Subcategory</option>
          {/* Subcategories would be mapped over here based on selectedCategory */}
        </select>
        <select value={selectedRating} onChange={handleRatingFilterChange}>
          <option value="">Select Rating</option>
          {/* Rating options would be mapped over here */}
        </select>
      </div>
      <div className="services-container">
        {renderServices()}
      </div>
    </div>
  );
};

export default ServicesView;
