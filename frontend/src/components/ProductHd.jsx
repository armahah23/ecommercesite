import { TbArrowRight } from "react-icons/tb";
import PropTypes from "prop-types";

function ProductHd(props) {
  const  { product }  = props;
  return (
    <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{" "}
      <TbArrowRight /> {product.name}
    </div>
  );
}

export default ProductHd;

ProductHd.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
  }),
};
