import React from 'react'

export default function Banner() {
    const products = [
        { id: 1, name: 'Product Name', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Another Product', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
        // Add more products as needed
    ];
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
