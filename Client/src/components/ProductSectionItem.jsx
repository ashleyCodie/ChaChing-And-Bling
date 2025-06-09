
import { Tooltip, Button, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";
import { Link, useParams } from "react-router";



const ProductSectionItem = () => {
  const product = useSelector((state) => state.products.product);

  const dispatch = useDispatch();

  const {id} = useParams()

  return (
    <div className="mt-5 ml-12">
      <Link to={`/product/detail/${product.id}`}>
        <div className="z-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-600 ">
   
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
            <h4 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {product.productName}
            </h4>
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 ">
              {product.description.substring(0, 75)}...
            </h5>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 ">
                ${product.price["$numberDecimal"]}
              </span>
              <Tooltip
                content="More Details"
                className="text-black bg-red-600 text-md"
                placement="bottom"
              >
                <Button
                  onClick={() => {
                    
                    dispatch(getProduct(id));
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
      </Link>
    </div>
  );
};

export default ProductSectionItem;