import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bg-hero bg-center bg-cover bg-no-repeat h-screen w-full">
      <div className="max_padd_container relative top-32 xs:top-30">
        <h1 className="h1 capitalize max-w-[37rem]">Digital Shoping Junction</h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[37rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          asperiores eius accusantium nobis rerum cumque officia aspernatur
          consequatur quam facilis quo iusto, reprehenderit earum possimus
          delectus excepturi error voluptatibus reiciendis eligendi a molestiae!
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176K
            <span className="rehular-16 sm:regular-20">{" "}Exellent Reviews</span>
          </div>
        </div>
        <div className="max-xs-flex-col flex gap-2">
          <NavLink to={""} className="btn_dark_rounded flexCenter">
            Shop Now
          </NavLink>
          <NavLink to={""} className="btn_dark_rounded flexCenter gap-x-2">
            <MdLocalOffer className="text-2xl"/>
            Offer
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
