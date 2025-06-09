import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../redux/cartSlice";
import { getProduct, productDelete } from "../redux/productSlice";
import { updateUserCart } from "../redux/authSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const product = useSelector((state) => state.products.product);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.auth.user);



  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("product", product);
  }, [product]);

  console.log("productDetail", product, id);

  // const productSize = product[0].size ? product[0].size[0] : "";
  const [size, setSize] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, []);



  const handleDelete = () => {
    dispatch(productDelete(id));
    toast.success("Product Deleted Successfully");
    navigate("/products");
  };

  return (
    <div>
      <div className="flex justify-center items-center py-10">
        <div className="pl-44 grow-[2]">
          <img
            className="h-[650px] rounded-lg shadow-lg shadow-gray-600"
            src={
              new URL(`../assets/images/${product.image}`, import.meta.url).href
            }
            alt={product.productName}
          />
        </div>
        <div className="grow-[3]">
          <div className="max-w-lg">
            <h5 className="text-2xl font-extrabold tracking-normal leading-none pb-4 text-red-600">
              {product.productName}
            </h5>
            <p className="text-md pb-4">
              <span className="font-bold">Brand:</span> {product.brand}
            </p>
            <p className="text-red-600 text-xl font-bold pb-4">15% OFF</p>
            <p className="text-xl font-bold pb-4">{product.description}</p>
            <p className="text-md pb-4">
              <span className="font-bold">Rating:</span>{" "}
              {product.rating["$numberDecimal"]}
            </p>
            <div className="pb-4">
              {product.sizes ? (
                <div className="pb-4">
                  <label
                    htmlFor="size"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Select A Size
                  </label>
                  <select
                    name="size"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                  >
                    <option>Select A Size</option>
                    {product.sizes.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : (
                <div>
                  <label
                    htmlFor="size"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Select A Size
                  </label>
                  <select
                    name="size"
                    id="size"
                    disabled={true}
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5   "
                  >
                    {product?.sizes.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
              {!isLoggedIn && (
                <h1 className="text-red-600">*Please Login To Add To Cart*</h1>
              )}
            </div>
            {user.role.includes("User") && (
              <div>
                <div>
                  <Tooltip
                    content="Add To Cart"
                    className="text-black bg-red-600 text-md"
                    placement="bottom"
                  >
                    <Button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.id,
                            productName: product.productName,
                            image: product.image,
                            description: product.description,
                            size: size,
                            price: product.price,
                            amount: 1,
                            totalPrice: product.price,
                          })
                        );
                        dispatch(
                          updateUserCart({
                            userId: user.id,
                            item: {
                              productId: product.id,
                              productName: product.productName,
                              image: product.image,
                              description: product.description,
                              size: size,
                              price: product.price,
                            },
                          })
                        );
                      }}
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className=" p-3 tooltip hover:text-red-600"
                    >
                      Purchase Now
                    </Button>
                  </Tooltip>
                </div>
              </div>
            )}
            {user.role.includes("Owner") && (
              <div className="grid grid-cols-2">
                <div>
                  <Tooltip
                    content="Update Item"
                    className="text-black bg-red-600 text-md"
                    placement="bottom"
                  >
                    <Button
                      onClick={() => navigate(`/update-product/${product.id}`)}
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className=" p-3 tooltip hover:text-red-600"
                    >
                      Update
                    </Button>
                  </Tooltip>
                  <Tooltip
                    content="Delete Item"
                    className="text-black bg-red-600 text-md"
                    placement="bottom"
                  >
                    <Button
                      onClick={handleDelete}
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className=" p-3 tooltip hover:text-red-600 ml-2"
                    >
                      Delete
                    </Button>
                  </Tooltip>
                </div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
