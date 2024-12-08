import { Link } from "react-router-dom";
import { Product_Type } from "../constants/types";
import { useGetAllProductsQuery } from "../redux/api/productApi"
import Product_Card from "./Product_Card";

const Default_Product = () => {


    const { data: products } = useGetAllProductsQuery(undefined);


    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-center text-3xl font-bold mt-10 text-[#5e464a]">Our Products</h1>
            <p className="text-center text-sm mb-10">Explore All Products Available Here for Your Needs!</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                    {
                        products?.slice(0, 6)?.map((one: Product_Type) => (
                            <Product_Card key={one?.product_id} data={one} />
                        ))
                    }
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <Link to={'/product'}>
                    <button className="btn bg-[#5e464a] hover:bg-[#775a5f] text-white">Explore All Products</button>
                </Link>
            </div>
        </div>
    )
}

export default Default_Product
