// ProductCard.js
import Image from 'next/image';
import React from 'react';

const ProductDetailsCard = ({productDetails}) => {
  const smallPhotos = productDetails?.productImages
  return (
    <div className="flex justify-center flex-col items-center border border-gray-300 rounded-lg shadow-sm p-4 max-w-xs h-[400px]" dir='rtl'>
      <div className="mb-4 main-product">
        <img src={`https://elaf.onrender.com/${productDetails?.mainImage}`} alt='model' className='object-contain p-2 rounded-md transition duration-300'/>
      </div>

      <div className="flex justify-between items-center">
      {productDetails && productDetails.productImages && productDetails.productImages.length > 0 && (
  <div className="flex justify-center">
    {productDetails.productImages.slice(0, 4).map((image, index) => (
      <Image
        key={index}
        src={`https://elaf.onrender.com/${image}`}
        alt={`model ${index}`}
        width={100}
        height={100}
        className="object-contain p-1 rounded-md border border-gray-300"
      />
    ))}
  </div>
)}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
