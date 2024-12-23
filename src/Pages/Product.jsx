import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import '../Pages/CSS/Product.css';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product-page">
      <div className="product-header">
        <Breadcrum product={product} />
      </div>
      <div className="product-main">
        <ProductDisplay product={product} />
      </div>
      <div className="product-description">
        <DescriptionBox />
      </div>
      <div className="product-related">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Product;
