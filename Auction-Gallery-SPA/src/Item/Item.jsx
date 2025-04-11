import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { toast } from "react-toastify";

const Item = ({
    item,
    isLastRow = false,
    handleFavourite,
    handleRemoveFavourite,
    isFavourited,
}) => {
    const handleFavouriteClick = () => {
        if (!isFavourited) {
            handleFavourite(item);
        } else {
            handleRemoveFavourite(item);
        }

        toast.success("Item added to favourites");
    };

    return (
        <tr
            className={`${
                isLastRow ? "" : "border-b-2 border-[#E5E5E5]/50"
            } hover:bg-[#F8F8F8]`}
        >
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
                ${item.currentBidPrice || "Current Bid Price"}
            </td>
            <td className="py-5">{item.timeLeft || "Remaining Time"}</td>
            <th className="py-5">
                {!isFavourited ? (
                    <button
                        onClick={handleFavouriteClick}
                        className="btn-heart ml-6 cursor-pointer"
                    >
                        <GoHeart size={20} />
                    </button>
                ) : (
                    <button
                        className="btn-filled-heart text-red-500 ml-6 cursor-not-allowed"
                        disabled={true}
                    >
                        <GoHeartFill size={20} />
                    </button>
                )}
            </th>
        </tr>
    );
};

export default Item;
