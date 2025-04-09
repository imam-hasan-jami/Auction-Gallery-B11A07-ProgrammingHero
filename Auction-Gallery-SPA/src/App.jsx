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
                <div className="main-container flex max-w-[1500px] mx-auto">
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
                    <div className="favorites-container w-[40%]">
                        <div className="flex items-center gap-2">
                            <GoHeart />
                            <h3> Favourite Items</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
