function ProductDescription() {
  return (
    <div className="mt-20">
      <div className="flex mb-4 gap-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py=[6px] w-3/6">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py=[6px] w-3/6">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py=[6px] w-3/6">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16 ">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          a! Omnis, recusandae earum. Odit, veniam ex recusandae laboriosam
          explicabo maxime laborum, suscipit delectus hic vero velit dolores
          ratione, quam minima.
        </p>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          officiis quae repudiandae ea voluptas quaerat molestiae! Nulla
          repellat similique ad inventore, soluta, nostrum iure laudantium
          perspiciatis modi atque nobis quo.
        </p>
      </div>
    </div>
  );
}

export default ProductDescription;
