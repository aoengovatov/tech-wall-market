import { Link } from "react-router-dom";
import { useState } from "react";
import { request } from "../../../../utils";
import { getShortName, datetimeStringFormatter } from "../../../../utils";

export const OrderRoll = ({
    id,
    owner,
    products,
    status,
    createdAt,
    totalPrice,
    statusList,
}) => {
    const [initialStatus, setInitialStatus] = useState(status);
    const [updatedStatus, setUpdatedStatus] = useState(status);
    const isSaveStatus = initialStatus !== updatedStatus;

    const onStatusChange = ({ target }) => {
        setUpdatedStatus(target.value);
    };

    const updateStatus = () => {
        request(`/orders/${id}`, "PATCH", { status: updatedStatus }).then(() => {
            setInitialStatus(updatedStatus);
        });
    };

    return (
        <div className="flex items-center">
            <div className="grid grid-cols-7 items-center mb-[5px] px-[5px] w-[90%] p-[5px] bg-lightGray rounded-lg">
                <div className="text-xs">{datetimeStringFormatter(createdAt)}</div>
                <div className="">{owner}</div>
                <div className="">{id.slice(-8)}</div>
                <div className="col-span-2 text-xs">
                    <div className="bg-white p-[5px] mr-[10px] rounded-md">
                        {products.map(({ _id: id, name, count }) => (
                            <div key={id} className="flex justify-between">
                                <Link to={`/catalog/${id}`} className="text-xs">
                                    {getShortName(name)}
                                </Link>
                                <div className="text-xs">х {count}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">{totalPrice} ₽</div>
                <select
                    value={updatedStatus}
                    onChange={(target) => onStatusChange(target)}
                >
                    {statusList.map(({ id, name }) => (
                        <option key={id} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            {isSaveStatus && (
                <div
                    onClick={() => updateStatus()}
                    className="ml-[10px] text-blue cursor-pointer hover:underline"
                >
                    Сохранить
                </div>
            )}
        </div>
    );
};
