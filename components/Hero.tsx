import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col  py-10 pb-32 md:gap-5  xl:flex-row">
      <div className="hero-map" />
      {/* Left*/}

      <div className="relative z-20 flex flex-col flex-1  lg:w-[40%]">
        <Image
          src={"/camp.svg"}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-40 lg:bold-88">Idalgashinna Camp Area</h1>
        <p className="regular-16 mt-16 text-grey-30 xl:max-w-[520px]">
          Safe, Reliable & Secure. Get Instant Confirmation. Book a Camp in
          Idalgashinna online. Secure Booking. Villas. Airport Taxi available.
          Great Availability. Motels. Save 10% with Genius. Book Your Car
          Rental. Flight + Hotel. Low Rates. No Booking Fees.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={"./star.svg"}
                  alt="star"
                  width={24}
                  height={24}
                  key={index}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k{" "}
            <span className="regular-16 lg:regular-20 ml-1 ">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />

          <Button
            type="button"
            title="How we work"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[350px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 lg:mt-20">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src={"/close.svg"} height={24} width={24} alt="close" />
            </div>
            <p className="bold-20 text-white"> Idalgashinna,Sri Lanka</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Distance from Colombo</p>
              <p className="bold-20 text-white"> 210km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Elavation</p>
              <p className="bold-20 text-white"> 5,299 ft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
