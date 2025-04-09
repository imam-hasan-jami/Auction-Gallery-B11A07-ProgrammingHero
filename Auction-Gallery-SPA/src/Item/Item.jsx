import React from "react";
import { GoHeart } from "react-icons/go";

const Item = ({ item }) => {
    return (
        <div>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src={item.image} alt="Item Image" />
                            </div>
                        </div>
                        <div>{item.title || "Item Title"}</div>
                    </div>
                </td>
                <td>{item.currentBidPrice || "Current Bid Price"}</td>
                <td>{item.timeLeft || "Remaining Time"}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">
                        <GoHeart size={20} />
                    </button>
                </th>
            </tr>
        </div>
    );
};

export default Item;
