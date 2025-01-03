import { createContext } from "react";
import PropTypes from "prop-types";
import all_products from "../assets/all_products.js";


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_products}

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