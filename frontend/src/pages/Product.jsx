import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((p) => String(p.id) === String(productId));

  return (
      <section className="max_padd_container py-28">
          <div>
              <ProductHd product={product} />
              <ProductDisplay product={product} />
              <ProductDescription />
              <RelatedProducts />
          </div>
      </section>
  );
}

export default Product
