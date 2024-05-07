import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Breadcrumbs,
    ButtonLike,
    ProductCode,
    CardPrice,
    SaleWidget,
    ButtonRed,
} from "../../components";
import { request } from "../../utils";
import { Page404 } from "../404/page-404";
import { saleCount } from "../../utils";

export const SingleProduct = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [sale, setSale] = useState(0);

    useEffect(() => {
        request(`/products/${params.productId}`).then((data) => {
            if (data.error === null) {
                setProduct(data.product);
            }

            if (product.price && product.oldPrice) {
                setSale(saleCount(product.price, product.oldPrice));
            }
        });
    }, [params.productId, product]);

    return product ? (
        <>
            <Breadcrumbs />
            <div className="mt-[10px] mb-[30px] border-2 border-lightGray rounded-lg">
                <div className="flex w-full mb-[15px] p-[15px]">
                    <div className="flex items-center justify-center w-1/2">
                        <img src={product.imageUrl} className="w-[300px] m-[20px]"></img>
                    </div>

                    <div className="w-1/2">
                        <div className="flex flex-col">
                            <div className="flex items-start justify-between">
                                <div className="font-semibold text-xl w-10/12 mb-[10px]">
                                    {product.name}
                                </div>
                                <ButtonLike />
                            </div>

                            <ProductCode>{product._id.slice(-8)}</ProductCode>
                        </div>
                        <div className="flex flex-col w-full bg-lightGray p-[20px] mt-[15px] rounded-xl">
                            <div className="flex items-start justify-between mb-[5px]">
                                <CardPrice
                                    price={product.price}
                                    oldPrice={product.oldPrice}
                                    color={"green"}
                                />
                                <SaleWidget count={sale} />
                            </div>
                            <div className="text-sm text-darkGray mb-[10px]">
                                бесплатная доставка курьером
                            </div>
                            <div className="w-8/12 m-auto">
                                <ButtonRed>Добавить в корзину</ButtonRed>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full p-[20px]">
                    <div className="flex flex-col items-start justify-start w-1/2 pr-[30px]">
                        <div className="text-base font-semibold mb-2">
                            Описание товара:
                        </div>
                        <div className="font-normal leading-6 whitespace-pre-line">
                            {product.description}
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start w-1/2 pr-[30px]">
                        <div className="text-base font-semibold mb-1">
                            Характеристики товара:
                        </div>
                        <div className="font-normal leading-7 whitespace-pre-line">
                            {product.characteristic}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Page404 />
    );
};
