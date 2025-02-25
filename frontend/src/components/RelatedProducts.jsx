import getDefaultData from "../assets/data";
import Item from "./Item";

const { popular } = getDefaultData();

function RelatedProducts() {
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Related Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-r from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popular.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
