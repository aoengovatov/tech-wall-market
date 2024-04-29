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
    Authorization,
    Registration,
    Page404,
    AccessDenied,
    MyOrders,
    Users,
    Orders,
} from "./pages";
import { Header, Footer, Modal } from "./components";

export const MarketApp = () => {
    return (
        <>
            <Modal on={false} />
            <div className="flex flex-col min-h-[100vh] justify-between">
                <div>
                    <Header />

                    <div className="w-[1100px] mx-auto">
                        <div className="mx-[20px]">
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/login" element={<Authorization />} />
                                <Route path="/register" element={<Registration />} />
                                <Route path="/catalog" element={<Catalog />} />
                                <Route path="/catalog/:id" element={<SingleProduct />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route
                                    path="/profile/favorites"
                                    element={<Favorites />}
                                />
                                <Route path="/profile/basket" element={<Basket />} />
                                <Route path="/profile/orders" element={<Orders />} />
                                <Route path="/profile/my-orders" element={<MyOrders />} />
                                <Route
                                    path="/profile/add-product"
                                    element={<AddProduct />}
                                />
                                <Route
                                    path="/profile/category"
                                    element={<AddCategory />}
                                />
                                <Route path="/profile/users" element={<Users />} />
                                <Route path="/access-denied" element={<AccessDenied />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};
