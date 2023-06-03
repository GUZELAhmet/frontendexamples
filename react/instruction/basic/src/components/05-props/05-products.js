import React from 'react';
import ProductCard from './06-product-card';

const Products = () => {
    return (
        <div>
            <ProductCard name="John">
                <h2>Sony Display</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quod eveniet reprehenderit culpa debitis quia asperiores nihil, iusto quisquam.
                </p>
            </ProductCard>
            <ProductCard>
                <h2>Intel Processor</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptatem quod eveniet reprehenderit culpa debitis quia asperiores nihil, iusto quisquam.
                </p>
            </ProductCard>
        </div>
    )
};

export default Products