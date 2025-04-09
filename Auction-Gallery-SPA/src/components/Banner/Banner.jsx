import React from "react";
import bannerImage from "../../assets/Banner-min.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <div className="relative max-h-[730px] w-full overflow-hidden">
                <img
                    className="scale-x-[-1] h-[800px] w-full object-cover"
                    src={bannerImage}
                    alt=""
                />
            </div>

            <div className="absolute inset-0 mt-62 max-w-[1500px] mx-auto">
                <h1 className="font-sora text-5xl text-white">
                    Bid on Unique Items from <br /> Around the World
                </h1>
                <p className="font-sora text-2xl text-white font-extralight mt-5">
                    Discover rare collectibles, luxury goods, and vintage <br />{" "}
                    treasures in our curated auctions
                </p>
                <button className="bg-white rounded-4xl py-4 px-8 mt-8 font-sora text-xl">
                    Explore Auctions
                </button>
            </div>
        </div>
    );
};

export default Banner;
