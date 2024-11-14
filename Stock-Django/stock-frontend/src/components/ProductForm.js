import React, { useState, useEffect } from 'react';
import api from '../api';

const ProductForm = ({ productToEdit, onSave }) => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        qty_stock: 0,
        price: '',
        added_date: '',
    });

    useEffect(() => {
        if (productToEdit) {
            setProduct({
                ...productToEdit,
                added_date: new Date(productToEdit.added_date).toISOString().split('T')[0],
            });
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productToEdit) {
            api.put(`products/${product.id}/`, product)
                .then((response) => {
                    alert('Produto atualizado com sucesso!');
                    onSave();
                })
                .catch((error) => {
                    console.error('Erro ao atualizar produto:', error);
                });
        } else {
            api.post('products/', product)
                .then((response) => {
                    alert('Produto adicionado com sucesso!');
                    window.location.reload();
                    onSave();
                })
                .catch((error) => {
                    console.error('Erro ao adicionar produto:', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800">{productToEdit ? 'Editar Produto' : 'Adicionar Produto'}</h2>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-600 font-medium">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-gray-600 font-medium">Descrição:</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={product.description}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="qty_stock" className="block text-gray-600 font-medium">Quantidade:</label>
                    <input
                        type="number"
                        name="qty_stock"
                        id="qty_stock"
                        value={product.qty_stock}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-gray-600 font-medium">Preço:</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="added_date" className="block text-gray-600 font-medium">Data de Adição:</label>
                    <input
                        type="date"
                        name="added_date"
                        id="added_date"
                        value={product.added_date}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {productToEdit ? 'Salvar' : 'Adicionar'}
                </button>
                <button
                    type="button"
                    onClick={() => onSave()}
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
