import { Routes, Route } from "react-router-dom";
import {
    Basket,
    Catalog,
    Main,
    SingleProduct,
    Profile,
    Favorites,
    AddProduct,
    AddCategory,
} from "./pages";
import { Header, Footer } from "./components";

export const MarketApp = () => {
    return (
        <>
            <Header />
            <div className="w-[1100px] mx-auto">
                <div className="mx-[20px]">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<div>Авторизация</div>} />
                        <Route path="/registration" element={<div>Регистрация</div>} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/catalog/:id" element={<SingleProduct />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/profile/favorites" element={<Favorites />} />
                        <Route path="/profile/basket" element={<Basket />} />
                        <Route
                            path="/profile/orders"
                            element={<div>Заказы пользователей</div>}
                        />
                        <Route
                            path="/profile/my-orders"
                            element={<div>Мои заказы</div>}
                        />
                        <Route path="/profile/add-product" element={<AddProduct />} />
                        <Route path="/profile/category" element={<AddCategory />} />
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
