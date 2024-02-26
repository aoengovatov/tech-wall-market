import { Routes, Route } from "react-router-dom";
import { Header, Footer, Banner } from "./components";

export const MarketApp = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className="w-[1100px] mx-auto">
                <div className="mx-[20px]">
                    <Routes>
                        <Route path="/" element={<div>Главная страница</div>} />
                        <Route path="/login" element={<div>Авторизация</div>} />
                        <Route path="/registration" element={<div>Регистрация</div>} />
                        <Route path="/catalog" element={<div>Каталог товаров</div>} />
                        <Route
                            path="/catalog/:category"
                            element={<div>Каталог товаров</div>}
                        />
                        <Route
                            path="/catalog/:category/:id"
                            element={<div>Страница товара</div>}
                        />
                        <Route path="/profile" element={<div>Профиль</div>} />
                        <Route path="/profile/favorites" element={<div>Избранное</div>} />
                        <Route path="/profile/basket" element={<div>Корзина</div>} />
                        <Route path="/profile/orders" element={<div>Заказы</div>} />
                        <Route
                            path="/profile/add-product"
                            element={<div>Товары / Добавить товар</div>}
                        />
                        <Route
                            path="/profile/category"
                            element={<div>Категории / Добавить категорию</div>}
                        />
                        <Route
                            path="/profile/user-orders"
                            element={<div>Заказы пользователей</div>}
                        />
                        <Route
                            path="*"
                            element={<div>Ошибка! Такой страницы не существует</div>}
                        />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    );
};
