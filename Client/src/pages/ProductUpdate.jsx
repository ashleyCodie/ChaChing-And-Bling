import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productUpdate, getProduct } from "../redux/productSlice"
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const ProductUpdate = () => {
  const product = useSelector((state) => state.products.product);
  const [updateProductForm, setUpdateProductForm] = useState({
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

  const { id } = useParams();
  console.log("id", id)


  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, []);
  

  useEffect(() => {
console.log("updateProductForm is CHANGING", updateProductForm)
  }, [updateProductForm])

  useEffect(() => {
if (product) {
  setUpdateProductForm(product)
}
  }, [product])
  
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
 
    console.log("updateProductForm", updateProductForm)
    dispatch(productUpdate(updateProductForm));
    toast.success("Product Updated Successfully");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <section className="">
        <div className=" m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center text-red-600 font-semibold mb-6">
                Update Product
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
                  value={updateProductForm.productName}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.description}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.category}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
                      category: e.target.value,
                    })
                  }
                >
                  {/* <option value="Select A Brand">Select A Category</option> */}
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
                  value={updateProductForm.brand}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.gender}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.sizes}
                  onChange={(e) => {
                    let value = Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    );
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  // placeholder="$0.00"
                  // required
                  value={updateProductForm.price["$numberDecimal"]}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.numberRemaining}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.image}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  value={updateProductForm.rating["$numberDecimal"]}
                  onChange={(e) =>
                    setUpdateProductForm({
                      ...updateProductForm,
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
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductUpdate;