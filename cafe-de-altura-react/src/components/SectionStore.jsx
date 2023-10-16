import { React, useState, useEffect,useContext } from 'react'
import ProductCard from './ProductCard';
import { getCoffee } from './ProductList';
import { CoffeeContext } from '../context/Context';
import Boton from './Boton';

const SectionStore = () => {
    const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    getCoffee(
      "https://cafe-de-altura.vercel.app/api/products/"
    ).then((data) => {
      setCoffee(data.products);
    });
  }, []);
  const coffeeList = coffee.slice(0,8);

    return (
        
            <div className="grid grid-rows-2 grid-flow-col justify-center gap-6 p-6">
                {coffeeList.map((cafe) => {
                    return (
                        <ProductCard
                            key={cafe._id}
                            img={cafe.img_url}
                            name={cafe.brand}
                            price={cafe.price}
                            available={cafe.available}
                        />
                    );
                })}
            </div>
    )
}

export default SectionStore

