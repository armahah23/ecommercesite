import { createContext } from "react";
import PropTypes from "prop-types";
import all_products from "../assets/all_products.js";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    console.log('Context all_products:', all_products); // Add this log
    
    const contextValue = {
        all_products: all_products || [] // Provide a default empty array
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;