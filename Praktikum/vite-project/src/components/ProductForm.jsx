import { useState, useEffect } from 'react';
import './css/forminput.css';
import axios from 'axios';

function ProductForm() {
    const [formData, setFormData] = useState({
        productName: '',
        productCategory: '',
        productFreshness: '',
        additionalDescription: '',
        price: ''
        // image: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        // Jika tipe input adalah file, simpan file di state
        const val = type === 'file' ? files[0] : value;

        console.log(files);
        console.table(files);
        setFormData(prevState => ({
            ...prevState,
            [name]: val
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post('https://6624a47b04457d4aaf9ca36d.mockapi.io/product', formData);
            console.table('Data berhasil ditambahkan:');
            console.table(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Gagal menambahkan data:', error);
        }

        setFormData({
            productName: '',
            productCategory: '',
            productFreshness: '',
            additionalDescription: '',
            price: ''
            // image: null
        });
    };

    useEffect(() => {
        alert('Welcome');
    }, []);

    const validateProductName = (value) => {
        // Validasi nama produk, memungkinkan huruf, angka, spasi, dan beberapa karakter khusus
        const nameRegex = /^[a-zA-Z0-9\s-]+$/;
        return nameRegex.test(value);
    };

    const validateProductCategory = (value) => {
        // Validasi kategori produk, memungkinkan huruf dan spasi
        const categoryRegex = /^[a-zA-Z\s]+$/;
        return categoryRegex.test(value);
    };

    const validateProductFreshness = (value) => {
        // Validasi kesegaran produk, memastikan hanya ada tiga opsi yang diperbolehkan
        const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/;
        return freshnessRegex.test(value);
    };

    const validatePrice = (value) => {
        // Validasi harga, di sini harga harus positif dan bisa berisi desimal
        const priceRegex = /^\d*\.?\d*$/;
        return priceRegex.test(value);
    };

    const validateAdditionalDescription = (value) => {
        // Validasi deskripsi tambahan, memungkinkan huruf, angka, spasi, dan tanda baca dasar
        const descriptionRegex = /^[a-zA-Z0-9\s.,!?()-]+$/;
        return descriptionRegex.test(value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Input Product Name */}
            <label htmlFor="productname" className="mb-2">Product name</label>
            <input type="text" id="productname" name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="border border-[#CED4DA] rounded-md h-9 focus:ring focus:outline-none focus:ring-primary-500 px-4 py-1 sm:w-72"
                required
            />
            {!validateProductName(formData.productName) && (
                <p className="text-red-500">Please enter a valid product name</p>
            )}

            {/* Select product category */}
            <label htmlFor="productcategory" className="mb-2 mt-4">Product Category</label>
            <select name="productCategory" id="productcategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="border border-[#CED4DA] rounded-md h-9 px-4 py-1 focus:ring focus:outline-none focus:ring-primary-500 sm:w-72"
                required
            >
                <option value="">Choose...</option>
                <option value="Foot">Foot</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothes">Clothes</option>
                <option value="Makeup">Makeup</option>
            </select>
            {!validateProductCategory(formData.productCategory) && (
                <p className="text-red-500">Please select a valid product category</p>
            )}

            {/* Input file untuk gambar produk */}
            <label htmlFor="imageofproduct" className="mb-2 mt-4">Image of Product</label>
            <input
                accept=".png,.jpg,.jpeg,.gif"
                type="file"
                name="image"
                id="imageofproduct"
                className="mb-6 rounded-md border sm:w-52 max-w-52 border-primary-500 text-primary-500 focus:outline-none focus:ring focus:ring-primary-500 imageofproduct"
                onChange={handleChange} // Ganti handleChange
            />

            {/* Select product freshness */}
            <label htmlFor="productfreshness" className="mb-2 mt-4">Product Freshness</label>
            <div className="flex flex-col">
                <div className="flex items-center mb-2">
                    <input type="radio" name="productFreshness" id="brandnew" value="Brand New"
                        checked={formData.productFreshness === "Brand New"}
                        onChange={handleChange} />
                    <label htmlFor="brandnew" className="ml-2">Brand New</label>
                </div>
                <div className="flex items-center mb-2">
                    <input type="radio" name="productFreshness" id="secondhand" value="Second Hand"
                        checked={formData.productFreshness === "Second Hand"}
                        onChange={handleChange} />
                    <label htmlFor="secondhand" className="ml-2">Second Hand</label>
                </div>
                <div className="flex items-center mb-2">
                    <input type="radio" name="productFreshness" id="refurbished" value="Refurbished"
                        checked={formData.productFreshness === "Refurbished"}
                        onChange={handleChange}
                        required />
                    <label htmlFor="refurbished" className="ml-2">Refurbished</label>
                </div>
            </div>
            {!validateProductFreshness(formData.productFreshness) && (
                <p className="text-red-500">Please select a valid product freshness</p>
            )}

            {/* Additional description */}
            <label htmlFor="additionaldescription" className="mt-4 mb-2">Additional Description</label>
            <textarea required name="additionalDescription" id="additionaldescription" cols="30" rows="5"
                value={formData.additionalDescription}
                onChange={handleChange}
                className="border border-[#CED4DA] rounded-md shadow px-2 py-1 focus:outline-none focus:ring focus:ring-primary-500"></textarea>
            {!validateAdditionalDescription(formData.additionalDescription) && (
                <p className="text-red-500">Please enter a valid description</p>
            )}

            {/* Input product price */}
            <label htmlFor="price" className="mt-4 mb-2">Product Price</label>
            <input type="number" name="price" id="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-[#CED4DA] rounded-md h-9 focus:ring focus:outline-none focus:ring-primary-500 px-4 py-1 sm:w-72"
                required
            />
            {!validatePrice(formData.price) && (
                <p className="text-red-500">Please enter a valid price</p>
            )}

            {/* Submit button */}
            <button type="submit"
                className="bg-primary-500 rounded-md text-xl text-white my-6 py-2 sm:py-4 px-10 hover:bg-primary-600 w-11/12 mx-auto">Submit</button>
        </form>
    );
}

export default ProductForm;