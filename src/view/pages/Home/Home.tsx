import {useEffect} from "react";

import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../slices/productSlice.ts";
import type {AppDispatch, RootState} from "../../../sore/store.ts";

export function Home() {
    // const [products, setProducts] = useState<ProductData[]>([])

    const dispatch = useDispatch<AppDispatch>();

    const {list} = useSelector((state:RootState) => state.products);


    useEffect(() => {
        dispatch(getAllProducts()); //Get all products
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('./product-data.json')
    //             const jsonData = await response.json();
    //             // console.log(jsonData);
    //             setProducts(jsonData);
    //             console.log(products);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //     }
    // }
    //
    //     fetchData();
    }, []);

    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mt-10 mb-5 ml-46 px-4 mx-auto max-w-7xl gap-y-1 ">

                {
                    list.map((product) => (
                    <Product key={product.id} data={product}/>
                    ))
                }

            </div>
        </div>
    );
}













// import Spinach from "../../../assets/product/Spinach.jpg";
//
// export function Home() {
//     return (
//         <div>
//             <div className="flex flex-wrap ml-[1px] mt-80 mb-5 justify-center items-center mx-auto">
//
//                 <div className="flex w-28 h-32 bg-blue-300 mr-2 mb-2 justify-center items-center">
//
//                     <img className="h-[200px] w-[200px]" src={Spinach} alt="Spinach"/>
//
//                     <div className="flex">
//                         <h3 className="text-[#1f9e4b] text-[12px] pl-2">
//                             Spinach
//                         </h3>
//                     </div>
//
//                     <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg">
//                         <h3>200 <small>LKR</small></h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// <h1 className="text-4xl font-bold text-green-700">This is the Home Page!</h1>

// export function Home() {
//     return (
//         <>
//             <h1> This is Home Page!</h1>
//         </>
//     );
// }