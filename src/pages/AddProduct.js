import { useNavigate } from 'react-router-dom';
import PostFormData from '../requests/PostFormData';


const AddProduct = () => {
    const navigate = useNavigate();

    const addProduct = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('price', e.target.price.value);
        formData.append('image', e.target.image.files[0]);

        PostFormData('http://127.0.0.1:8000/products/add', formData);

        e.target.reset();
        navigate('/');
    }

    return (
        <div className="w-50 mx-auto mt-5">
            <h2 className="text-center">Add Product</h2>
            <form onSubmit={addProduct}>
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
                    <input className="form-control form-control-sm" type="file" id="image" name="image" required="required" />
                </div>
                <input className="btn btn-info btn-sm text-white float-end" type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddProduct