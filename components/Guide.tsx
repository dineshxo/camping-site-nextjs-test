import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image src={"/camp.svg"} alt="camp" height={50} width={50} />
        <p className="bold-20  -mt-1 mb-3 text-orange-500 ">
          We are Here For You !
        </p>
        <div className="flex  flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 lg:max-w-[390px]">
            Guide you to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] text-justify ">
            "Experience the serenity of nature with our Idalgashinna Camping
            app. Discover picturesque camping spots nestled in the heart of
            Idalgashinna's lush landscapes. From serene lakesides to
            breathtaking mountain views, easily book your perfect camping
            getaway with just a few taps. Plan your adventure, immerse yourself
            in nature, and create unforgettable memories with our user-friendly
            CampGear app."
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image
          src={"/train.png"}
          alt="boat"
          height={580}
          width={1440}
          className="w-full object-cover object-center 2xl:rounded-5xl h-[580px]"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50"> 5 hours</p>
              </div>
              <p className="bold-20 mt-2">Idalgashinna</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Colombo</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
