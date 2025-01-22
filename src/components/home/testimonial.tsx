"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "@/constants";
import Image from "next/image";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <section className="w-full mx-auto mb-24 bg-gradient-to-b from-black to-neutral-950 p-12 xl:p-16 relative">
      <div className="text-center relative">
        <Image
          src={"/testimonial.png"}
          alt="Testimonials Illustration"
          width={500}
          height={500}
          className="absolute top-8 xl:top-2 -right-24 xl:right-0 w-[150px] sm:w-[190px] lg:w-[300px] hidden sm:block"
        />
        <h1 className="text-white border text-center rounded-full border-white py-2 px-8 inline-block mb-4 text-sm sm:text-base">
          Testimonials
        </h1>
        <h2 className="text-white text-center text-2xl font-bold mt-5 sm:text-3xl">
          Clients Feedback
        </h2>
        <p className="text-[#CBCBCB] lg:w-[550px] w-full mx-auto text-center mt-6 sm:px-4 sm:text-sm">
          We are trusted by 10,000+ global customer teams who have worked on
          projects using this template.
        </p>
      </div>

      <div className="relative w-full overflow-hidden mt-24 px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="p-4 sm:p-6 border border-gray-600 rounded-2xl xl:h-80 h-96 mx-auto w-full bg-neutral-800">
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover w-20 h-20 xl:w-24 xl:h-24 rounded-full"
                  />
                  <h1 className="text-white font-semibold mt-4 uppercase text-sm">
                    {testimonial.name}
                  </h1>
                  <span className="text-xs text-gray-400">
                    {testimonial.designation}
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <Rating
                    initialRating={testimonial.rating}
                    readonly
                    emptySymbol={<FaRegStar className="mr-1 text-gray-500" />}
                    fullSymbol={<FaStar className="mr-1 text-[#FCCB28]" />}
                  />
                  <p className="text-gray-300 text-sm mt-4">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="custom-prev transform text-white text-3xl cursor-pointer z-10 border p-2 border-gray-600 rounded-xl">
            <IoIosArrowRoundBack className="hover:text-primary" />
          </button>
          <button className="custom-next transform text-white text-3xl cursor-pointer z-10 border p-2 border-gray-600 rounded-xl">
            <IoIosArrowRoundForward className="hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
