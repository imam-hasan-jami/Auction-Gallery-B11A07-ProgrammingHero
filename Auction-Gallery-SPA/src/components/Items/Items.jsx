import React, { use } from "react";
import Item from "../../Item/Item";

const Items = ({ itemsPromise }) => {
    const items = use(itemsPromise);

    return (
        <div>
            <h1>Items length: {items.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Items;
