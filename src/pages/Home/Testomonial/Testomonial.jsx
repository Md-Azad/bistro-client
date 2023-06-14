import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { FaQuoteLeft } from "react-icons/fa";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const Testomonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-12">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testomonial"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-28">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
               <FaQuoteLeft className="my-8"></FaQuoteLeft>
              <p className="py-8">{review.details}</p>
              <h3 className="text-3xl text-orange-400 ">
                {review.name}
              </h3>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testomonial;
