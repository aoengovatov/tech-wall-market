import {
    Breadcrumbs,
    ButtonLike,
    GoodCode,
    CardPrice,
    SaleWidget,
    ButtonRed,
} from "../../components";

export const SingleGood = () => {
    return (
        <>
            <Breadcrumbs />
            <div className="mt-[10px] mb-[30px] border-2 border-lightGray rounded-lg">
                <div className="flex w-full mb-[15px] p-[15px]">
                    <div className="flex items-center justify-center w-1/2">
                        <img
                            src="/src/assets/item-logo-min.png"
                            className="w-[300px] m-[20px]"
                        ></img>
                    </div>

                    <div className="w-1/2">
                        <div className="flex flex-col">
                            <div className="flex items-start justify-between">
                                <div className="font-semibold text-xl w-10/12 mb-[10px]">
                                    15,3" Ноутбук Apple MacBook Air 2023 (M2) 8/512 Гб,
                                    Space Gray(Космический серый)
                                </div>
                                <ButtonLike />
                            </div>

                            <GoodCode>ir1785</GoodCode>
                        </div>
                        <div className="flex flex-col w-full bg-lightGray p-[20px] mt-[15px] rounded-xl">
                            <div className="flex items-start justify-between mb-[5px]">
                                <CardPrice
                                    price={149900}
                                    oldPrice={189900}
                                    color={"green"}
                                />
                                <SaleWidget count={30} />
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
                        <div className="font-normal leading-6">
                            Новый MacBook Air оснащен просторным 15,3-дюймовым дисплеем
                            Liquid Retina с высоким разрешением, поэтому пользователи
                            могут просматривать еще больше контента. Благодаря яркости до
                            500 нит и поддержке 1 миллиарда цветов блестящий
                            жидкокристаллический дисплей Retina делает контент на
                            удивление насыщенным и ярким, а текст - четким, как бритва. Он
                            также в два раза превышает разрешение и на 25 процентов ярче,
                            чем аналогичный ноутбук для ПК. <br></br>
                            <br></br>Толщина нового MacBook Air составляет всего 11,5 мм,
                            что делает его самым тонким 15-дюймовым ноутбуком в мире. Он
                            весит всего 3,3 фунта, что делает его невероятно портативным.
                            Несмотря на большой дисплей, новый MacBook Air прочный. Кроме
                            того, он почти на 40 процентов тоньше и на полфунта легче
                            аналогичного ноутбука для ПК. <br></br>
                            <br></br>MacBook Air также оснащен зарядным устройством
                            MagSafe, двумя портами Thunderbolt для подключения аксессуаров
                            и внешним дисплеем с разрешением до 6 КБ, а также разъемом для
                            наушников 3,5 мм для универсального подключения. Он
                            поставляется в четырех великолепных вариантах отделки —
                            midnight, starlight, space gray и silver.
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start w-1/2 pr-[30px]">
                        <div className="text-base font-semibold mb-1">
                            Характеристики товара:
                        </div>
                        <div className="font-normal leading-7">
                            Диагональ экрана: 15.3 " <br></br>Разрешение экрана: 2880x1864{" "}
                            <br></br>Частота обновления экрана: 60 Гц <br></br>Тип матрицы
                            экрана: Liquid Retina<br></br>
                            Процессор: Apple M2
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
