import React, { useState } from 'react';
import api from '../api';

const ProductItem = ({ product, onUpdate }) => {

    const [isEditing, setIsEditing] = useState(false);

    const [updatedProduct, setUpdatedProduct] = useState({
        name: product.name,
        description: product.description,
        qty_stock: product.qty_stock,
        price: product.price,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        api.put(`products/${product.id}/`, updatedProduct)
            .then((response) => {
                alert('Produto atualizado com sucesso!');
                setIsEditing(false);
                onUpdate();
            })
            .catch((error) => {
                console.error('Erro ao atualizar produto:', error);
            });
    };

    const handleDelete = () => {
        api.delete(`products/${product.id}/`)
            .then(() => {
                alert('Produto excluído com sucesso!');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Erro ao excluir produto:', error);
            });
    };

    return (
        <li className="border-b border-gray-300 py-4 bg-gray-50">
            <div className="flex justify-between items-center">
                {isEditing ? (
                    <div className="w-full space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={updatedProduct.name}
                            onChange={handleChange}
                            className="p-2 border border-gray-400 rounded w-full mb-2 text-sm"
                            placeholder="Nome do produto"
                        />
                        <input
                            type="text"
                            name="description"
                            value={updatedProduct.description}
                            onChange={handleChange}
                            className="p-2 border border-gray-400 rounded w-full mb-2 text-sm"
                            placeholder="Descrição do produto"
                        />
                        <input
                            type="number"
                            name="qty_stock"
                            value={updatedProduct.qty_stock}
                            onChange={handleChange}
                            className="p-2 border border-gray-400 rounded w-full mb-2 text-sm"
                            placeholder="Quantidade em estoque"
                        />
                        <input
                            type="number"
                            name="price"
                            value={updatedProduct.price}
                            onChange={handleChange}
                            className="p-2 border border-gray-400 rounded w-full mb-2 text-sm"
                            placeholder="Preço"
                        />
                        <div className="flex justify-end space-x-2">
                            <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm">
                                Salvar
                            </button>
                            <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 text-sm">
                                Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 space-y-2">
                        <p className="font-semibold text-lg">{product.name}</p>
                        <p className="text-sm">{product.description}</p>
                        <p className="text-sm"><strong>Quantidade:</strong> {product.qty_stock}</p>
                        <p className="font-semibold text-xl text-gray-900"><strong>Preço:</strong> R${product.price}</p>
                        <div className="flex space-x-4 mt-2">
                            <button onClick={handleEdit} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 text-sm">
                                Editar
                            </button>
                            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 text-sm">
                                Excluir
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
};

export default ProductItem;
