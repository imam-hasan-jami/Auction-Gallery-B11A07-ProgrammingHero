import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Navbar from "./components/Navbar/Navbar";
import { GoHeart } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const fetchItems = async () => {
    const response = await fetch("items.json");
    return response.json();
};

const itemsPromise = fetchItems();

function App() {
    const [favourite, setFavourite] = useState([]);
    const [amount, setAmount] = useState(0);
    const [favouriteIds, setFavouriteIds] = useState([]);

    const handleFavourite = (item) => {
        setFavourite([...favourite, item]);
        setAmount(amount + item.currentBidPrice);
        setFavouriteIds([...favouriteIds, item.id]);
    };

    const handleRemoveFavourite = (item) => {
        const updatedFavourite = favourite.filter((fav) => fav.id !== item.id);
        setFavourite(updatedFavourite);
        setAmount(amount - item.currentBidPrice);
        setFavouriteIds(favouriteIds.filter((id) => id !== item.id));
        toast("Item removed from favourites");
    };

    return (
        <>
            <Navbar />
            <Banner />

            {/* Auction Section Style */}
            <div className="bg-blue-200/15">
                <div className="main-container flex gap-6 max-w-[1500px] mx-auto">
                    {/* item container */}
                    <div className="items-container w-[60%]">
                        <Suspense
                            fallback={
                                <div className="font-poppins font-semibold text-4xl text-center mt-20">
                                    Items are loading...
                                </div>
                            }
                        >
                            <Items
                                itemsPromise={itemsPromise}
                                handleFavourite={handleFavourite}
                                handleRemoveFavourite={handleRemoveFavourite}
                                favouriteIds={favouriteIds}
                            />
                        </Suspense>
                    </div>

                    {/* favourite container */}
                    <div
                        className={`favorites-container w-[40%] bg-white mt-[260px] ${
                            favourite.length === 0 ? "h-[410px]" : "h-auto"
                        } max-h-[810px] rounded-3xl flex flex-col`}
                    >
                        <div className="flex justify-center items-center gap-2 pt-10 pb-5 border-b-2 border-[#E5E5E5]/50">
                            <GoHeart size={30} />
                            <h3 className="font-sora text-3xl">
                                Favourite Items
                            </h3>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {favourite.length === 0 ? (
                                <>
                                    <h3 className="font-sora text-[26px] text-center font-medium mt-12">
                                        No favorites yet
                                    </h3>
                                    <p className="font-sora text-base text-center mt-6 pb-11 border-b-2 border-[#E5E5E5]/50">
                                        Click the heart icon on any item <br />{" "}
                                        to add it to your favorites
                                    </p>
                                </>
                            ) : (
                                <>
                                    {favourite.map((fav) => (
                                        <div
                                            key={fav.id}
                                            className="flex items-center gap-3 mx-10 px-5 py-5 border-b-2 border-[#E5E5E5]/50"
                                        >
                                            <div className="avatar">
                                                <div className="h-15 w-15">
                                                    <img src={fav.image} alt="Item Image" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center w-full">
                                                    <div className="font-sora text-base text-[#0E2954]">
                                                        {fav.title}
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            handleRemoveFavourite(fav)
                                                        }
                                                    >
                                                        <ImCross size={12} />
                                                    </button>
                                                </div>
                                                <div className="flex gap-20 mt-2 mb-2 font-sora text-base text-[#0E2954]">
                                                    <div>
                                                        ${fav.currentBidPrice}
                                                    </div>
                                                    <div>
                                                        Bids: {fav.bidsCount}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            <div className="sticky bottom-0 bg-white pb-7 rounded-3xl">
                                <div className="flex justify-around items-center">
                                    <h3 className="font-sora text-2xl mt-8">
                                        Total bids Amount
                                    </h3>
                                    <h3 className="font-sora text-2xl mt-8">
                                        ${amount}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default App;
