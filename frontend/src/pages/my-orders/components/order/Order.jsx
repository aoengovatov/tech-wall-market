import { ProductCard } from "../product-card/product-card";
import { datetimeStringFormatter, numberFormatter } from "../../../../utils";

export const Order = ({ id, createdAt, status, products, totalPrice }) => {
    return (
        <div className="px-[20px] py-[15px] mb-[20px] bg-lightGray rounded-2xl">
            <div className="mb-[15px] flex align-top justify-between">
                <div className="flex flex-col">
                    <h2 className="leading-7">Заказ № {id.slice(-8)}</h2>
                    <div className="text-darkGray">
                        {datetimeStringFormatter(createdAt)}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-[18px] text-right leading-6 md:text-[22px]">
                        {status}
                    </div>
                    <div className="text-darkGray">текущий статус</div>
                </div>
            </div>
            <div className="grid grid-cols-1 content-center justify-items-center gap-3 mb-[20px] min-[390px]:grid-cols-2 min-[550px]:grid-cols-3 min-[550px]:gap-4 min-[740px]:grid-cols-4 min-[970px]:grid-cols-5">
                {products.map(({ _id: id, name, price, productId, count, imageUrl }) => (
                    <ProductCard
                        key={id}
                        id={id}
                        name={name}
                        price={price}
                        productId={productId}
                        count={count}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
            <div className="flex items-center justify-end">
                <h2 className="mr-[5px]">Итого: </h2>
                <span className="text-[22px] font-semibold text-green">
                    {numberFormatter(totalPrice)}
                    <span className="ml-[3px]">₽</span>
                </span>
            </div>
        </div>
    );
};
