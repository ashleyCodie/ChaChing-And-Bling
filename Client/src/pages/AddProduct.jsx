import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice"
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [addProductForm, setAddProductForm] = useState({
    productName: "",
    description: "",
    category: "",
    brand: "",
    sizes: [],
    price: 0,
    gender: "",
    numberRemaining: "",
    image: "",
    rating: "",
  });


  useEffect(() => {
console.log("addProductForm is CHANGING", addProductForm)
  }, [addProductForm])
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    console.log("addProductForm", addProductForm)
    dispatch(addProduct({ ...addProductForm }));
    toast.success("Product Added Successfully");
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  return (
    <>
      <section className="">
        <div className=" m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center text-red-600 font-semibold mb-6">
                Add New Product
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Product Name"
                  required
                  value={addProductForm.productName}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      productName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add description about product being added"
                  value={addProductForm.description}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={addProductForm.category}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="Select A Brand">Select A Category</option>
                  <option value="Pants">Pants</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Shirt">Shirt</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Purse">Purses</option>
                  <option value="Belt">Belts</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Dresses">Dresses</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Brand
                </label>
                <select
                  id="brand"
                  name="brand"
                  className="border rounded w-full py-2 px-3"
                  // required
                  value={addProductForm.brand}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      brand: e.target.value,
                    })
                  }
                >
                  <option value="Select A Brand">Select A Brand</option>
                  <option value="Betsey Johnson">Betsey Johnson</option>
                  <option value="Miss Me">Miss Me</option>
                  <option value="Chanel">Chanel</option>
                  <option value="Coach">Coach</option>
                  <option value="Louis Vutton">Louis Vutton</option>
                  <option value="Gucci">Gucci</option>
                  <option value="Juicy Couture">Juicy Couture</option>
                  <option value="Michael Kors">Michael Kors</option>
                  <option value="Prada">Prada</option>
                  <option value="Justin">Justin</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="brand"
                  name="brand"
                  className="border rounded w-full py-2 px-3"
                  // required
                  value={addProductForm.gender}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="Select A Gender">Select A Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Kids">Kids</option>
                  <option value="Other">Other</option>
                </select>
              </div>


              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Size
                </label>
                <select
                  id="category"
                  name="category"
                  className="border rounded w-full py-2 px-3"
                  // required
                  value={addProductForm.sizes}
                  onChange={(e) => {
                    let value = Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    );
                    setAddProductForm({
                      ...addProductForm,
                      sizes: value
                    });
                  }}
                  multiple={true}
                >
                  <option value="Select Available Sizes" disabled={true}>
                    Select Available Sizes
                  </option>
                  <option value="One Size">One Size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="$0.00"
                  // required
                  value={addProductForm.price}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      price: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Number Remaining
                </label>
                <input
                  type="text"
                  id="number_remaining"
                  name="number_remaining"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="50"
                  // required
                  value={addProductForm.numberRemaining}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      numberRemaining: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Image
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="image.jpg"
                  // required
                  value={addProductForm.image}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      image: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Rating
                </label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Rating"
                  // required
                  value={addProductForm.rating}
                  onChange={(e) =>
                    setAddProductForm({
                      ...addProductForm,
                      rating: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <button
                  className="btn btn-primary  hover:bg-red-600 hover:text-black text-red-600  bg-black font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;