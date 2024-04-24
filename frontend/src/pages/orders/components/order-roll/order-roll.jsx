import { getShortName } from "../../../../utils";

export const OrderRoll = ({ id, owner, products, createdAt, totalPrice }) => {
    const isSave = true;

    return (
        <div className="flex items-center">
            <div className="grid grid-cols-7 items-center mb-[5px] px-[5px] w-[90%] p-[5px] bg-lightGray rounded-lg">
                <div className="text-xs">{createdAt}</div>
                <div className="">{owner}</div>
                <div className="">{id}</div>
                <div className="col-span-2 text-xs">
                    <div className="bg-white p-[5px] mr-[10px] rounded-md">
                        {products.map(({ id, name, count }) => (
                            <div key={id} className="flex justify-between">
                                <div className="text-xs">{getShortName(name)}</div>
                                <div className="text-xs">х {count}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">{totalPrice} Р</div>
                <select>
                    <option>доставлен</option>
                    <option>сборка на складе</option>
                    <option>в пути на пункт выдачи</option>
                </select>
            </div>
            {isSave && (
                <div className="ml-[10px] text-blue cursor-pointer hover:underline">
                    Сохранить
                </div>
            )}
        </div>
    );
};
