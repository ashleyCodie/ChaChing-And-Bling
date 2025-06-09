import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";

const FilterGender = () => {
  const { products } = useSelector((state) => state.products);
  console.log("products", products);
  const { gender } = useParams();
  console.log("params", gender);

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl text-red-600 font-extrabold tracking-normal leading-none">
            {gender}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter((product) => product.gender === gender)
            .map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard product={product}></ProductCard>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FilterGender;