import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../sore/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

// type ProductData = {
//     id: number,
//     name: string,
//     price: string,
//     currency: string,
//     image: string
// }
type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob(
    '../../../assets/product/*',
    {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    // console.log(images);
    console.log(`../../../assets/product/${data.image}`)

    const image = images[`../../../assets/product/${data.image}`];

    const dispatch= useDispatch<AppDispatch>();

    const [isActive, setIsActive]
        = useState(false);
    const addToCart = () => { dispatch(addItemToCart(data))
        setIsActive(true);
    }

    return (
        <div className="flex flex-wrap ml-[1px] mt-40 mb-5 justify-center items-center mx-auto ">

            <div className="h-200w-40 bg-green-100 rounded-lg shadow-md p-5 m-2">

                <img className="h-[200px] w-[200px]" src={image} alt=""/>

                <div className="flex justify-center items-center mt-2">
                    <h2 className="text-[#1f9e4b] text-lg font-bold text-center w-full">
                        {data.name}
                    </h2>
                </div>

                <div className="bg-yellow-300 mt-1 p-1 rounded text-center">
                    <h3 className="text-sm font-medium">{data.price} <small>{data.currency}</small></h3>
                </div>

                <div className="flex justify-center">
                    {
                        isActive ? (
                            <ModifyCart data={{
                                product: data
                            }}/>
                        ) : (
                    <button
                        className="w-full mt-2 p-[10px] bg-[#1f9e4b] text-[15px] border-gray-500 border-[0.5px]" onClick={addToCart}>Add
                        to Cart
                    </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
}