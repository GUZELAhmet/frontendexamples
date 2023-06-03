import React from 'react';
import "./06-product-card.scss";

const ProductCard = (props) => {
    return (
        <div className='product-card'>
            geri kalan her sey
            <br />
            {props.children}
        </div>
    )
};

export default ProductCard;