import React, { useState } from 'react';

const categories = [
  { id: 'tutoring', name: 'Tutoring', subcategories: ['Math', 'Science', 'Literature'] },
  { id: 'techSupport', name: 'Tech Support', subcategories: ['Computer Repair', 'Software Installation'] },
  { id: 'artDesign', name: 'Art & Design', subcategories: ['Graphic Design', 'Photography'] },
  { id: 'other', name: 'Other', subcategories: ['Other'] }, // Added 'Other' option
  // ... add more categories suitable for college students
];

const AddServiceView = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState(''); // Separate state for description
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [pricingModel, setPricingModel] = useState('perHr');
  const [points, setPoints] = useState('');
  const [pointsError, setPointsError] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final check if points are not in denomination of 5
    if (points % 5 !== 0) {
      setPointsError('Points must be in denominations of 5.');
      return;
    }
    setPointsError('');
    // Handle the form submission
    console.log({
      serviceName,
      description, // Include description in the form submission
      category,
      subcategory,
      pricingModel,
      points,
      photo,
    });
    // Submit these values to the backend or state management
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setSubcategory(newCategory === 'other' ? 'Other' : ''); // Automatically set subcategory to 'Other' if category is 'Other'
  };

  const renderSubcategories = () => {
    const selectedCategory = categories.find(c => c.id === category);
    return selectedCategory ? selectedCategory.subcategories.map((sub) => (
      <option key={sub} value={sub}>{sub}</option>
    )) : null;
  };

  const handlePointsChange = (e) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setPoints(value); // Update the state to the current input
  };

  const handlePointsBlur = () => {
    // Validate the points only when the user leaves the textbox
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
          <label>Photo Upload (optional):</label>
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
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
          <input type="radio" name="pricingModel" value="perHr" checked={pricingModel === 'perHr'} onChange={() => setPricingModel('perHr')} required /> Per Hour
          <input type="radio" name="pricingModel" value="fixed" checked={pricingModel === 'fixed'} onChange={() => setPricingModel('fixed')} required /> Fixed Price
          <input type="radio" name="pricingModel" value="other" checked={pricingModel === 'other'} onChange={() => setPricingModel('other')} required /> Other
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            value={points}
            onChange={handlePointsChange}
            onBlur={handlePointsBlur} // Added to validate points on blur
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
