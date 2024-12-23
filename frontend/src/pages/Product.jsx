import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import ProductHd from "../components/ProductHd";

function Product() {
  const {all_products} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((product) => product.id === Number(productId));
  return (
    <section className="max_podd_container mt-20">
      <div>
        <ProductHd product={product}/>
      </div>
    </section>
  )
}

export default Product
