import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, ButtonSmall } from "../../components";
import { WidgetItem } from "./components";
import { getUser, reset } from "../../store/userSlice";
import { ROLE } from "../../constants";
import { Navigate } from "react-router-dom";
import { checkAccess, request } from "../../utils";
import { useEffect, useState } from "react";

export const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const [countAll, setCountAll] = useState({});

    useEffect(() => {
        if (checkAccess([ROLE.ADMIN, ROLE.MODERATOR], user.roleId)) {
            request("/users/count-all").then((data) => {
                if (data.error === null) {
                    setCountAll(data.count);
                }
            });
        }
        if (checkAccess([ROLE.USER], user.roleId)) {
            request("/users/products/count-all").then((data) => {
                if (data.error === null) {
                    setCountAll(data.count);
                }
            });
        }
    }, [user.roleId]);

    if (user.roleId === ROLE.GUEST) {
        return <Navigate to={"/login"} />;
    }

    const userLogout = () => {
        dispatch(reset());
        sessionStorage.removeItem("userData");
    };

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <div className="flex items-center mb-[10px]">
                    <h1 className="ml-[10px]">Профиль {user.login}</h1>
                    <div className="ml-[15px]">
                        <ButtonSmall onClick={userLogout}>выход</ButtonSmall>
                    </div>
                </div>

                <div className="flex flex-wrap w-full gap-2">
                    {checkAccess([ROLE.USER], user.roleId) && (
                        <>
                            <WidgetItem
                                name={"favorites"}
                                count={countAll.favorites}
                                link={"/profile/favorites"}
                            />
                            <WidgetItem
                                name={"basket"}
                                count={countAll.basket}
                                link={"/profile/basket"}
                            />
                            <WidgetItem
                                name={"my-orders"}
                                count={countAll.orders}
                                link={"/profile/my-orders"}
                            />
                        </>
                    )}

                    {checkAccess([ROLE.MODERATOR, ROLE.ADMIN], user.roleId) && (
                        <>
                            <WidgetItem
                                name={"add-product"}
                                count={countAll.products}
                                link={"/profile/add-product"}
                            />
                            <WidgetItem
                                name={"categories"}
                                count={countAll.categories}
                                link={"/profile/category"}
                            />
                            <WidgetItem
                                name={"orders"}
                                count={countAll.orders}
                                link={"/profile/orders"}
                            />
                        </>
                    )}

                    {checkAccess([ROLE.ADMIN], user.roleId) && (
                        <WidgetItem
                            name={"users"}
                            count={countAll.users}
                            link={"/profile/users"}
                        />
                    )}
                </div>
            </div>
        </>
    );
};
