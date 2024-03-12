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
    Login,
    Register,
    Page404,
} from "./pages";
import { Header, Footer, Modal } from "./components";

export const MarketApp = () => {
    return (
        <>
            <Modal on={false} />
            <Header />
            <div className="w-[1100px] mx-auto">
                <div className="mx-[20px]">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
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
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </div>

            <Footer />
        </>
    );
};
