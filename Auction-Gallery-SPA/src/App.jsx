import { Suspense } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Navbar from "./components/Navbar/Navbar";
import { GoHeart } from "react-icons/go";

const fetchItems = async () => {
    const response = await fetch("items.json");
    return response.json();
};

const itemsPromise = fetchItems();

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <div className="bg-blue-200/15">
                <div className="main-container flex gap-6 max-w-[1500px] mx-auto">
                    <div className="items-container w-[60%]">
                        <Suspense
                            fallback={
                                <div className="font-poppins font-semibold text-4xl text-center mt-20">
                                    Items are loading...
                                </div>
                            }
                        >
                            <Items itemsPromise={itemsPromise} />
                        </Suspense>
                    </div>
                    <div className="favorites-container w-[40%] bg-white mt-[260px] mb-130 rounded-3xl">
                        <div className="flex justify-center items-center gap-2 pt-10 pb-5 border-b-2 border-[#E5E5E5]/50">
                            <GoHeart size={30} />
                            <h3 className="font-sora text-3xl">
                                Favourite Items
                            </h3>
                        </div>
                        <div className="">
                            <h3 className="font-sora text-[26px] text-center font-medium mt-12">
                                No favorites yet
                            </h3>
                            <p className="font-sora text-base text-center mt-6 pb-11 border-b-2 border-[#E5E5E5]/50">
                                Click the heart icon on any item <br /> to add
                                it to your favorites
                            </p>
                            <div className="flex justify-around items-center">
                                <h3 className="font-sora text-2xl mt-8">
                                    Total bids Amount
                                </h3>
                                <h3 className="font-sora text-2xl mt-8">$0000</h3>
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
