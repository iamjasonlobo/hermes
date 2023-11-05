if (typeof global === 'undefined') {
  window.global = window;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from './routes/Layout';
import App from './App.jsx';
import AuthView from './routes/AuthView';
import AddProductView from './routes/AddProductView';
import AddServiceView from './routes/AddServiceView';
import ProductDetailView from './routes/ProductDetailView';
import ProductsView from './routes/ProductsView';
import ServicesView from './routes/ServicesView';
import ServicesDetailView from './routes/ServiceDetailView';
import ProviderProfileView from './routes/ProviderProfileView';
import UserProfileView from './routes/UserProfileView';
import NotFoundView from './routes/NotFoundView';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index={true} is used for the default route */}
          <Route index element={<App />} />

          {/* All other routes */}
          <Route path="auth" element={<AuthView />} />
          <Route path="add-product" element={<AddProductView />} />
          <Route path="add-service" element={<AddServiceView />} />
          <Route path="product-detail" element={<ProductDetailView />} />
          <Route path="products" element={<ProductsView />} />
          <Route path="services" element={<ServicesView />} />
          <Route path="service-detail" element={<ServicesDetailView />} />
          <Route path="provider" element={<ProviderProfileView />} />
          <Route path="user" element={<UserProfileView />} />


          {/* Not Found Page */}
          <Route path="*" element={<NotFoundView />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
