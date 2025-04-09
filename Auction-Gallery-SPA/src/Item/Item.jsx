import React from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const Item = ({ item, isLastRow = false }) => {
    return (
        <tr className={isLastRow ? "" : "border-b-2 border-[#E5E5E5]/50"}>
            <td className="px-5 py-5">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="h-15 w-15">
                            <img src={item.image} alt="Item Image" />
                        </div>
                    </div>
                    <div>{item.title || "Item Title"}</div>
                </div>
            </td>
            <td className="py-5">
                {item.currentBidPrice || "Current Bid Price"}
            </td>
            <td className="py-5">{item.timeLeft || "Remaining Time"}</td>
            <th className="py-5">
                <button className="ml-6">
                    <GoHeart size={20} />
                </button>

                <button className="hidden">
                    <GoHeartFill size={20} />
                </button>
            </th>
        </tr>
    );
};

export default Item;
