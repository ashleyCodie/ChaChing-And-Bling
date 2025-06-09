import { useEffect } from "react";
// import { storeData } from "../data/fakeData"
import { Tooltip, Button, Typography } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router";
import ProductSectionItem from "./ProductSectionItem";
import { productList, getProduct } from "../redux/productSlice";
import { updateUserWishList } from "../redux/authSlice"

const ProductSection = () => {
  const products = useSelector((state) => state.products.products);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  
  console.log("products", products);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(productList());
    console.log("productList", productList);
  }, []);

  useEffect(() => {
    console.log("products", products);
  }, [products]);

  return (
    <div className="ml-28 ">
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-xl tracking-normal leading-none">
          Selected Items on Sale for Summer Up To 50% Off
        </h3>
      </div>
      <div className="grid grid-cols-4 items-center mx-auto mt-5">
        {products.slice(0, 4).map((product, index) => {
          return (
            // <Link to={`/product/detail/${product.id}`} >
              <div key={index} className="z-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-600">
                <img
                  className="p-8 rounded-t-lg h-90 w-100 justify-items-center items-center"
                  src={
                    new URL(
                      `../assets/images/${product.image}`,
                      import.meta.url
                    ).href
                  }
                  alt={product.productName}
                />

                <div className="px-5 pb-5">
                  <h4 className="text-xl font-semibold tracking-tight text-gray-900">
                    {product.productName}
                  </h4>
                  <h5 className="text-sm font-semibold tracking-tight text-gray-900">
                    {product.description.substring(0, 75)}...
                  </h5>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price["$numberDecimal"]}
                    </span>
                    {isLoggedIn && (
                    <Tooltip
                      content="Add To Wish List"
                      className="text-black bg-red-600 text-md z-10"
                      placement="bottom"
                    >
                      <Button
                     onClick={() => 
                      dispatch(
                        updateUserWishList({
                          userId: user.id,
                          item: {
                            productId: product.id,
                          productName: product.productName,
                          image: product.image,
                          description: product.description,
                          sizes: product.sizes,
                          price: product.price,
                          }
                        })
                      )
                    }
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        className={`${user.wishList.find(listItem => listItem._id === product.id) ? "text-red-600 ml-30" : ""} p-2 tooltip hover:text-red-600 ml-30`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </Button>
                    </Tooltip>
)}
                    <Tooltip
                      content="More Details"
                      className="text-black bg-red-600 text-md z-10"
                      placement="bottom"
                    >
                      <Button
                        onClick={() => navigate(`/product/detail/${product.id}`)}
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        className=" p-3 tooltip hover:text-red-600"
                      >
                        Details
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;