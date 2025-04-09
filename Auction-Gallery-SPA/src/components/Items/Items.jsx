import React, { use } from "react";
import Item from "../../Item/Item";

const Items = ({ itemsPromise, handleFavourite }) => {
    const items = use(itemsPromise);

    return (
        <div>
            <div className="mt-33">
                <h1 className="font-sora font-medium text-[32px]">
                    Active Auctions
                </h1>
                <p className="font-sora text-xl mt-5 mb-8">
                    Discover and bid on extraordinary items
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-fixed mb-28 bg-white rounded-3xl">
                    <thead className="font-sora text-[18px] border-b-2 border-[#E5E5E5]/50">
                        <tr>
                            <th className="w-3/6 px-5 pt-12 pb-5">Items</th>
                            <th className="w-1/6 pt-12 pb-5">Current Bid</th>
                            <th className="w-1/6 pt-12 pb-5">Time Left</th>
                            <th className="w-1/6 pt-12 pb-5">Bid Now</th>
                        </tr>
                    </thead>
                    <tbody className="font-sora text-base">
                        {items.map((item, index) => (
                            <Item
                                key={item.id}
                                item={item}
                                isLastRow={index === items.length - 1}
                                handleFavourite={handleFavourite}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Items;
