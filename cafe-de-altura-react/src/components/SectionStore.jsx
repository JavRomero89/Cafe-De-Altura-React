import { React, useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import { getCoffee } from './ProductList';

const SectionStore = () => {
    const [coffee, setCoffee] = useState([]);
    useEffect(() => {
        getCoffee(
            "https://cafe-de-altura.vercel.app/api/products/"
        ).then((data) => {
            setCoffee(data.products);
        });
    }, []);
    const coffeeList = coffee.slice(0, 4);
    const coffeeList2 = coffee.slice(4, 8);

    return (
        <div className="flex flex-col p-[2.5em] items-center gap-[2.5em]">

            <div className="flex justify-center items-center gap-[1.5em]">
                {coffeeList.map((cafe) => {
                    return (
                        <ProductCard
                            key={cafe._id}
                            img={cafe.img_url}
                            name={cafe.brand}
                            price={cafe.price}
                        />
                    );
                })}
            </div>

            <div className="flex justify-center items-center gap-[1.5em]">
                {coffeeList2.map((cafe) => {
                    return (
                        <ProductCard
                            key={cafe._id}
                            img={cafe.img_url}
                            name={cafe.brand}
                            price={cafe.price}
                        />
                    );
                })}
            </div>
        </div>
    )
}
export default SectionStore