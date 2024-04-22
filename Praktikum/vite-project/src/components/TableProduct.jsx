import { useState, useEffect } from 'react';
import '../index.css';
import './css/forminput.css'; // style input type file
import './css/Loading.css'; // style loading
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListProduct() {
    const [editingProduct, setEditingProduct] = useState(null);
    const [editedProductName, setEditedProductName] = useState('');
    const [editedProductCategory, setEditedProductCategory] = useState('');
    const [editedProductFreshness, setEditedProductFreshness] = useState('');
    const [editedProductDescription, setEditedProductDescription] = useState('');
    const [editedProductPrice, setEditedProductPrice] = useState('');
    const [editedProductImage, setEditedProductImage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchListDataProductURL = "https://6624a47b04457d4aaf9ca36d.mockapi.io/product"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchListDataProductURL);
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setIsLoading(false); // Set isLoading to false after fetching data
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this product?");
        if (isConfirmed) {
            try {
                await axios.delete(`${fetchListDataProductURL}/${id}`);
                const updatedProducts = products.filter(product => product.id !== id);
                setProducts(updatedProducts);
            } catch (error) {
                console.error('Failed to delete product:', error);
            }
        }
    }

    const handleEdit = (product) => {
        setEditingProduct(product);
        setEditedProductName(product.productName);
        setEditedProductCategory(product.productCategory);
        setEditedProductFreshness(product.productFreshness);
        setEditedProductDescription(product.additionalDescription);
        setEditedProductPrice(product.price);
        setEditedProductImage(product.image);
        setIsEditing(true);
    };

    const handleSaveEdit = async () => {
        const updatedProduct = {
            productName: editedProductName,
            productCategory: editedProductCategory,
            productFreshness: editedProductFreshness,
            additionalDescription: editedProductDescription,
            price: editedProductPrice,
            image: editedProductImage
        };

        try {
            await axios.put(`${fetchListDataProductURL}/${editingProduct.id}`, updatedProduct);
            const updatedProducts = products.map(product =>
                product.id === editingProduct.id ? { ...product, ...updatedProduct } : product
            );
            setProducts(updatedProducts);
            setEditingProduct(null);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update product:', error);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditedProductImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex flex-col py-10 justify-center lg:items-center">
            <h1 className="font-medium text-2xl sm:text-3xl mx-auto mb-6">List Product</h1>
            {isEditing && (
                <div className='grid place-items-center w-full h-full absolute'>
                    <div className='bg-white shadow-xl rounded-lg z-40 w-[97%] sm:w-9/12 lg:w-3/5 p-4'>
                        <h1 className='text-primary-500 text-2xl font-medium text-center'>Edit Product</h1>
                        <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="flex flex-col">
                            {/* Product Name */}
                            <label htmlFor="productname" className="text-black mt-6">Product name</label>
                            <input type="text" id="productname" name="productName"
                                value={editedProductName}
                                className='border border-[#CED4DA] rounded-md focus:ring focus:outline-none focus:ring-primary-500 px-4 py-1'
                                onChange={(e) => setEditedProductName(e.target.value)}
                                required />

                            {/* Product Category */}
                            <label htmlFor="productcategory" className="text-black mt-6">Product Category</label>
                            <select name="productCategory" id="productcategory"
                                value={editedProductCategory}
                                onChange={(e) => setEditedProductCategory(e.target.value)}
                                className='border border-[#CED4DA] rounded-md focus:ring focus:outline-none focus:ring-primary-500 px-4 py-1'
                                required>
                                <option value="">Choose...</option>
                                <option value="Foot">Foot</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Makeup">Makeup</option>
                            </select>

                            {/* Product Image */}
                            <label htmlFor="productImage" className="text-black mt-6">Product Image</label>
                            <input type="file" name="productImage" id="productImage"
                                onChange={handleImageChange}
                                className="mb-6 rounded-md border sm:w-52 max-w-52 border-primary-500 text-primary-500 focus:outline-none focus:ring focus:ring-primary-500 imageofproduct"
                                required />

                            {/* Product Freshness */}
                            <label htmlFor="editbrandnew" className="text-black">Product Freshness</label>
                            <select name="productFreshness" id="editbrandnew"
                                value={editedProductFreshness}
                                onChange={(e) => setEditedProductFreshness(e.target.value)}
                                className='border border-[#CED4DA] rounded-md focus:ring focus:outline-none focus:ring-primary-500 px-4 py-1'
                                required>
                                <option value="Brand New">Brand New</option>
                                <option value="Second Hand">Second Hand</option>
                                <option value="Refurbished">Refurbished</option>
                            </select>

                            {/* Additional Description */}
                            <label htmlFor="additionaldescription" className="text-black mt-6">Additional Description</label>
                            <textarea
                                required
                                name="additionalDescription"
                                id="additionaldescription"
                                cols="30"
                                rows="5"
                                value={editedProductDescription}
                                onChange={(e) => setEditedProductDescription(e.target.value)}
                                className="border border-[#CED4DA] rounded-md shadow px-2 py-1 focus:outline-none focus:ring focus:ring-primary-500"
                            ></textarea>

                            {/* Product Price */}
                            <label htmlFor="price" className="text-black mt-6">Product Price</label>
                            <input type="number" name="price" id="price"
                                value={editedProductPrice}
                                onChange={(e) => setEditedProductPrice(e.target.value)}
                                className='border border-[#CED4DA] rounded-md focus:ring focus:outline-none focus:ring-primary-500 px-4 py-1'
                                required />

                            {/* Button Save and Cancel */}
                            <div className='grid gap-3 mt-6'>
                                <button type="submit"
                                    className="bg-green-500 rounded-md text-xl text-white hover:bg-green-600">Save</button>
                                <button type="button" onClick={handleCancelEdit}
                                    className="bg-zinc-600 rounded-md text-xl text-white hover:bg-zinc-700">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isLoading ? ( // Tampilkan pesan loading jika isLoading true
                <div className="flex justify-center items-center">
                    <div className="text-center my-4 flex mx-auto">
                        <p className='mr-1 font-medium italic'>Loading</p>
                        <div className='spinner'></div>
                    </div>
                </div>
            ) : (
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-figmagray-300">
                    <thead>
                        <tr className="border border-figmagray-300 bg-black/5">
                            <th className="px-3">No</th>
                            <th className="px-3">Product Name</th>
                            <th className="px-3">Product Category</th>
                            <th className="px-3">Product Image</th>
                            <th className="px-3">Product Freshness</th>
                            <th className="px-3">Additional Description</th>
                            <th className="px-3">Product Price</th>
                            <th className="px-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr className='h-auto border-collapse border border-figmagray-300' key={product.id}>
                                <td className="border border-figmagray-300 px-3 text-center"><Link to={`/products/${product.id}`}>{product.id}</Link></td>
                                <td className="border border-figmagray-300 px-3">{product.productName}</td>
                                <td className="border border-figmagray-300 px-3">{product.productCategory}</td>
                                <td className="border border-figmagray-300 px-3 py-1 place-content-center-center h-full overflow-hidden">
                                    <img src={product.image} alt={product.productName} className="w-20 h-20 object-cover mx-auto" />
                                </td>
                                <td className="border border-figmagray-300 px-3">{product.productFreshness}</td>
                                <td className="border border-figmagray-300 px-3 sm:max-w-32 md:max-w-44 lg:max-w-52">{product.additionalDescription}</td>
                                <td className="border border-figmagray-300 px-3 text-center">{product.price}</td>
                                <td className="border border-figmagray-300 px-3 text-center h-full">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md m-2" onClick={() => handleEdit(product)}>Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md m-2" onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> ) }
        </div>
    );
}

export default ListProduct;