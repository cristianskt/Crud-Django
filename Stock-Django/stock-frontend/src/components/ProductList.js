import React, { useState, useEffect } from 'react';
import api from '../api';
import ProductItem from './ProductItem';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products/')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Erro ao carregar produtos:', error);
            });
    }, []);

    const updateProductList = () => {
        api.get('products/')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Erro ao atualizar lista de produtos:', error);
            });
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Lista de Produtos</h1>
            <ul className="space-y-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} onUpdate={updateProductList} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
