import React, { useState } from 'react';

// Mock data
const servicesData = [
  {
    id: 1,
    photo: 'https://via.placeholder.com/150', // Dummy image
    name: 'Math Tutoring',
    provider: 'Jane Doe',
    points: 50,
    stars: 4.5,
  },{
    id: 1,
    photo: 'https://via.placeholder.com/150', // Dummy image
    name: 'Math Tutoring',
    provider: 'Jane Doe',
    points: 50,
    stars: 4.5,
  }
  // ... more services
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
      <div key={service.id} className="service-card">
        <img src={service.photo} alt={service.name} />
        <h2>{service.name}</h2>
        <p>by {service.provider}</p>
        <div>Stars: {service.stars}</div>
        <div>Points to buy: {service.points}</div>
      </div>
    ));
  };

  // Placeholder functions for future filter implementations
  const handleCategoryFilterChange = (e) => {
    console.log('Category filter to be implemented');
    setSelectedCategory(e.target.value);
  };

  const handleSubcategoryFilterChange = (e) => {
    console.log('Subcategory filter to be implemented');
    setSelectedSubcategory(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    console.log('Rating filter to be implemented');
    setSelectedRating(e.target.value);
  };

  // Placeholder for integrating with OpenSearch or any search engine in the future
  const handleSearch = () => {
    console.log('Search functionality to be implemented with OpenSearch or another search service');
  };

  return (
    <div>
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
          {/* Here you would map over your categories */}
        </select>
        <select value={selectedSubcategory} onChange={handleSubcategoryFilterChange} disabled={!selectedCategory}>
          <option value="">Select Subcategory</option>
          {/* Subcategories based on selectedCategory */}
        </select>
        <select value={selectedRating} onChange={handleRatingFilterChange}>
          <option value="">Select Rating</option>
          {/* Ratings options */}
        </select>
      </div>
      <div className="services-container">
        {renderServices()}
      </div>
    </div>
  );
};

export default ServicesView;
