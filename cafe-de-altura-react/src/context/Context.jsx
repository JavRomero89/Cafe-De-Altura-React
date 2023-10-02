// ./context.jsx
import { React, useState, createContext,useEffect } from "react";
import { GetApi } from "../utils/GetApi";


export const CoffeeContext = createContext();

const CoffeeContextProvider = ({children}) => {

	const [products, setProducts] = useState([]);

	const apiCoffee = `https://cafe-de-altura.vercel.app/api/products`;

	useEffect(() => {
        GetApi(apiCoffee).then(coffee => setProducts(coffee))
    }, []);

	return(
		<CoffeeContext.Provider value={{ products, setProducts }}>
            {children}
        </CoffeeContext.Provider>
	)
}

export default CoffeeContextProvider