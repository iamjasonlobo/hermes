import React, { useState } from 'react';

// Mock data
const productsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150', // Dummy image
    title: 'Smartphone',
    seller: 'John Doe',
    price: 200,
    rating: 4.5,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150', // Dummy image
    title: 'Bluetooth Headphones',
    seller: 'Emily Smith',
    price: 75,
    rating: 4.0,
  }
  // ... more products
];

const ProductsView = () => {
  const [filterTerm, setFilterTerm] = useState('');
  const [affordable, setAffordable] = useState(false);
  const [productCategory, setProductCategory] = useState('');
  const [productSubcategory, setProductSubcategory] = useState('');
  const [productRating, setProductRating] = useState('');

  // Function to render products
  const renderProducts = () => {
    // Apply filters to productsData as needed
    // Here we can integrate with real filtering logic in the future
    return productsData.map((product) => (
      <div key={product.id} className="info-card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>by {product.seller}</p>
        <div>Rating: {product.rating}</div>
        <div>Price: {product.price}</div>
      </div>
    ));
  };

  // Placeholder functions for future filter implementations
  const handleProductCategoryChange = (e) => {
    console.log('Product category filter to be implemented');
    setProductCategory(e.target.value);
  };

  const handleProductSubcategoryChange = (e) => {
    console.log('Product subcategory filter to be implemented');
    setProductSubcategory(e.target.value);
  };

  const handleProductRatingChange = (e) => {
    console.log('Product rating filter to be implemented');
    setProductRating(e.target.value);
  };

  // Placeholder for integrating with OpenSearch or any search engine in the future
  const handleProductSearch = () => {
    console.log('Product search functionality to be implemented with OpenSearch or another search service');
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="search-container">
        <input
          type="text"
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
          placeholder="Search products..."
        />
        <button onClick={handleProductSearch}>
          <i className="search-icon">🔍</i>
        </button>
      </div>
      <div className="filters-row">
        <label>
          <input
            type="checkbox"
            checked={affordable}
            onChange={(e) => setAffordable(e.target.checked)}
          />
          Affordable
        </label>
        <select value={productCategory} onChange={handleProductCategoryChange}>
          <option value="">Select Product Category</option>
          {/* Here you would map over your product categories */}
        </select>
        <select value={productSubcategory} onChange={handleProductSubcategoryChange} disabled={!productCategory}>
          <option value="">Select Product Subcategory</option>
          {/* Product Subcategories based on productCategory */}
        </select>
        <select value={productRating} onChange={handleProductRatingChange}>
          <option value="">Select Product Rating</option>
          {/* Product Ratings options */}
        </select>
      </div>
      <div className="info-container">
        {renderProducts()}
      </div>
    </div>
  );
};

export default ProductsView;
