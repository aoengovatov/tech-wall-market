import { ProductCard } from "../product-card/product-card";
import { datetimeStringFormatter } from "../../../../utils";

export const Order = ({ id, createdAt, status, products, totalPrice }) => {
    return (
        <div className="px-[20px] py-[15px] mb-[20px] bg-lightGray rounded-2xl">
            <div className="mb-[15px] flex align-top justify-between">
                <div className="flex flex-col">
                    <h2>Заказ № {id.slice(-8)}</h2>
                    <div className="text-darkGray">
                        {datetimeStringFormatter(createdAt)}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-[22px]">{status}</div>
                    <div className="text-darkGray">текущий статус</div>
                </div>
            </div>
            <div className="grid grid-cols-5 content-center justify-items-center gap-4 mb-[20px]">
                {products.map(({ _id: id, name, price, count, imageUrl }) => (
                    <ProductCard
                        key={id}
                        id={id}
                        name={name}
                        price={price}
                        count={count}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
            <div className="flex items-center justify-end">
                <h2 className="mr-[5px]">Итого: </h2>
                <span className="text-[22px] font-semibold text-green">
                    {totalPrice}
                    <span className="ml-[3px]">₽</span>
                </span>
            </div>
        </div>
    );
};
