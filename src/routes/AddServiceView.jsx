import React, { useState } from 'react';

const categories = [
  { id: 'tutoring', name: 'Tutoring', subcategories: ['Math', 'Science', 'Literature'] },
  { id: 'techSupport', name: 'Tech Support', subcategories: ['Computer Repair', 'Software Installation'] },
  { id: 'artDesign', name: 'Art & Design', subcategories: ['Graphic Design', 'Photography'] },
  { id: 'other', name: 'Other', subcategories: ['Other'] },
  // ... add more categories suitable for college students
];

const AddServiceView = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [pricingModel, setPricingModel] = useState('perHr');
  const [points, setPoints] = useState('');
  const [pointsError, setPointsError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (points % 5 !== 0) {
      setPointsError('Points must be in denominations of 5.');
      return;
    }
    setPointsError('');

    const serviceData = {
      ServiceName: serviceName,
      Description: description,
      Category: category,
      Subcategory: subcategory,
      PricingModel: pricingModel,
      Points: Number(points),
    };

    try {
      const response = await fetch('https://tfnvlfm2rl.execute-api.us-east-2.amazonaws.com/API_next/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Service added:', responseData);
      // Reset form or show success message
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Show error message
    }
  };


  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    // Reset subcategory when category changes
    setSubcategory('');
  };

  const renderSubcategories = () => {
    const selectedCategory = categories.find(c => c.id === category);
    return selectedCategory ? selectedCategory.subcategories.map((sub) => (
      <option key={sub} value={sub}>{sub}</option>
    )) : null;
  };

  const handlePointsChange = (e) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setPoints(value);
  };

  const handlePointsBlur = () => {
    if (points !== '' && points % 5 !== 0) {
      setPointsError('Points must be in denominations of 5.');
    } else {
      setPointsError('');
    }
  };

  return (
    <div>
      <h1>Add Service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name:</label>
          <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange} required>
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Subcategory:</label>
          <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} required disabled={!category}>
            <option value="">Select a subcategory</option>
            {renderSubcategories()}
          </select>
        </div>
        <div>
          <label>Pricing Model:</label>
          <div>
            <input type="radio" name="pricingModel" value="perHr" checked={pricingModel === 'perHr'} onChange={() => setPricingModel('perHr')} required /> Per Hour
            <input type="radio" name="pricingModel" value="fixed" checked={pricingModel === 'fixed'} onChange={() => setPricingModel('fixed')} required /> Fixed Price
            <input type="radio" name="pricingModel" value="other" checked={pricingModel === 'other'} onChange={() => setPricingModel('other')} required /> Other
          </div>
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            value={points}
            onChange={handlePointsChange}
            onBlur={handlePointsBlur}
            step="5"
            min="5"
            required
          />
          {pointsError && <p style={{ color: 'red' }}>{pointsError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddServiceView;
