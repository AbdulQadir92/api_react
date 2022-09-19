import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PostFormData from '../requests/PostFormData';
import PostRequest from '../requests/PostRequest';


const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const title = useRef();
    const price = useRef();
    const image = useRef();
    const addForm = useRef();

    const showForm = () => {
        addForm.current.classList.remove('d-none');
        addForm.current.title.value = title.current.innerText;
        addForm.current.price.value = price.current.innerText;
    }

    const updateProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('price', e.target.price.value);
        formData.append('image', e.target.image.files[0]);
        PostFormData('https://basic-api-django.herokuapp.com/products/update/' + id, formData);
        e.target.reset();
        e.target.classList.add('d-none');
        navigate('/');
    }

    const deleteProduct = () => {
        PostRequest('https://basic-api-django.herokuapp.com/products/delete/' + id, {});
        navigate('/');
    }

    const [product] = useFetch('https://basic-api-django.herokuapp.com/products/get/' + id);


    return (
        <div className="w-50 mx-auto mt-5">
            <h2 className="text-center">Product Details</h2>
            {product &&
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between" ref={title}>{product.title}</li>
                    <li className="list-group-item d-flex justify-content-between" ref={price}>{product.price}</li>
                    <li className="list-group-item d-flex justify-content-between">
                        <img width="170" height="250" src={`https://basic-api-django.herokuapp.com${product.image}`} alt="Product Image" ref={image} />
                    </li>
                    <div>
                        <button type="button" className="btn btn-info btn-sm text-white mt-3 float-end" onClick={showForm}>Edit</button>
                        <button type="button" className="btn btn-danger btn-sm text-white mt-3 me-3 float-end" onClick={deleteProduct}>Delete</button>
                    </div>
                </ul>
            }

            <form className="add-form mt-5 d-none" onSubmit={updateProduct} ref={addForm}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control form-control-sm" type="text" id="title" name="title" required="required" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Price</label>
                    <input className="form-control form-control-sm" type="number" id="price" name="price" step="0.01" min="0" required="required" />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image</label>
                    <input className="form-control form-control-sm" type="file" id="image" name="image"/>
                </div>
                <input className="btn btn-info btn-sm text-white float-end" type="submit" value="save" />
            </form>
        </div>
    )
}

export default ProductDetails