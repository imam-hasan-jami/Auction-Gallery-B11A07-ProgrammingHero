import { Suspense } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Navbar from "./components/Navbar/Navbar";

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
            <div className="main-container flex">
                <div className="items-container w-[70%]">
                    <Suspense fallback={<div>Items are loading...</div>}>
                        <Items itemsPromise={itemsPromise} />
                    </Suspense>
                </div>
                <div className="favorites-container w-[30%]"></div>
            </div>
            <Footer />
        </>
    );
}

export default App;
