import React from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";
import { useState, useEffect } from "react";

function ProductView({ products }) {
  // TODO: Replace with state variable
  // const sideOpen = true;
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    if (selectedProduct) setSideOpen(true);
  }, [selectedProduct]);

  useEffect(() => {
    if (!sideOpen) setSelectedProduct('');
  }, [sideOpen]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((item) => (
            <ProductListItem
              key={item.id}
              product={item}
              // onClick={() => console.log('SELECT PRODUCT', item)}
              onClick={() => setSelectedProduct(item)}
              isSelected={selectedProduct.id === item.id}
            />
          ))}
        </div>
        {/* <ProductDetails product={selectedProduct} /> */}
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div
            className="product-side-panel-toggle"
            onClick={() => setSideOpen(!sideOpen)}
          >
            {sideOpen ? ">" : "<"}
          </div>
        </div>
        {/* <ProductDetails visible={sideOpen}/> */}
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
