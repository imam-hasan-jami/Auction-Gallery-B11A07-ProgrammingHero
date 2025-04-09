import React from "react";

const Footer = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-poppins font-bold text-yellow-400 mt-[132px]">
                <span className="font-light text-blue-900">Auction</span>
                Gallery
            </h1>
            <div className="flex gap-4 justify-center mt-3">
                <p className="font-sora text-xl">Bid.</p>
                <p className="font-sora text-xl">Win.</p>
                <p className="font-sora text-xl">Own.</p>
            </div>
            <div className="flex gap-13 justify-center mt-6 font-poppins text-lg">
                <a href="">Home</a>
                <a href="">Auctions</a>
                <a href="">Categories</a>
                <a href="">How to works</a>
            </div>
            <p className="font-sora text-lg mt-8">© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;
