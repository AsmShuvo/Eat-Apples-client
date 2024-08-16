import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";

const Card = () => {
    const { id } = useParams();
    console.log("id :", id);
    const axios = useAxios();
    const { data: product } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await axios.get(`/product/show-product/${id}`)
            return res.data;
        }
    })
    console.log("single product: ", product?.product.name);
    const creationTime = product?.product.createdAt;
    const slicedTime = creationTime?.slice(0, 10);
    const time = creationTime?.slice(11, 16);

    return (
        <div className="min-h-screen">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                <div class="w-full md:w-2/5 h-80">
                    <img class="object-center object-cover w-96 h-80" src={product?.product.image} alt="photo" />
                </div>
                <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p class="text-xl text-gray-700 font-bold">{product?.product.name}</p>
                    <p class="text-base text-gray-400 font-normal">{product?.product.category}</p>
                    <p class="text-base leading-relaxed text-gray-500 font-normal">{product?.product.description}</p>
                    <p class=" text-xl font-semibold leading-relaxed text-gray-500">Price: <span className="text-primary">${product?.product.price}</span></p>
                    <p class=" text-lg font-semibold leading-relaxed text-gray-500 flex items-center gap-1"><FaStar className="text-green-600" />{product?.product.rating}</p>
                    <p class=" text-lg font-semibold leading-relaxed text-gray-500 flex items-center gap-1"> Creation Date: {slicedTime} at {time}</p>

                </div>
            </div>
        </div>
    );
};

export default Card;