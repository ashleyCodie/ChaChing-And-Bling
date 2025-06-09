import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router";
import {
  Tooltip, 
  Button
} from "@material-tailwind/react";
import { productList } from "../redux/productSlice";
import { updateUserWishList } from "../redux/authSlice"

const AllProducts = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate= useNavigate()

  useEffect(() => {
    console.log("products", products);
  }, [products]);


  useEffect(() => {
    dispatch(productList());
  }, [productList]);


  return (
    
      <div className="mt-5 ml-12 h-scroll grid grid-cols-4">
      
        {products.map((product, index) => (
          // <Link to={`/product/detail/${product.id}`} key={index}>
          <div key={index}className="z-10 mt-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-600">
            <img
              className="p-8 rounded-t-lg h-90 w-100 justify-items-center items-center"
              src={
                  new URL(`../assets/images/${product.image}`, import.meta.url)
                    .href
                }
              alt={product.productName}
            />

            <div className="px-5 pb-5">
              <h4 className="text-xl font-semibold tracking-tight text-red-600 ">
                {product.productName}
              </h4>
              <h5 className="text-sm pt-2 font-semibold tracking-tight text-gray-900 ">
                {product.description.substring(0, 75)}...
              </h5>
                <div className="pt-2 ">
                <span className="font-bold px-1 text-red-600">Sizes: </span>
            {product.sizes.map((size, index) => {
              return (
              <span className=" mr-2 rounded-full border-black" key={index}>  {size},</span>
            )
            })}
         
                </div>
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-gray-900 ">
                  ${product.price["$numberDecimal"]}
                </div>
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
                    onClick={() => {
                    //  dispatch(getProduct(product.id))
                    navigate(`/product/detail/${product.id}`)
                    }}
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
        ))}
      </div>
    
  );
};

export default AllProducts;