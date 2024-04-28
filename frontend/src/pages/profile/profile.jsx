import { useSelector } from "react-redux";
import { Breadcrumbs } from "../../components";
import { WidgetItem } from "./components";
import { getUser } from "../../store/userSlice";
import { ROLE } from "../../constants";
import { Navigate } from "react-router-dom";
import { checkAccess } from "../../utils";

export const Profile = () => {
    const user = useSelector(getUser);

    if (user.roleId === ROLE.GUEST) {
        return <Navigate to={"/login"} />;
    }

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Профиль {user.login}</h1>
                <div className="flex flex-wrap">
                    {checkAccess([ROLE.USER], user.roleId) && (
                        <>
                            <WidgetItem
                                name={"favorites"}
                                count={25}
                                link={"/profile/favorites"}
                            />
                            <WidgetItem
                                name={"basket"}
                                count={5}
                                link={"/profile/basket"}
                            />
                            <WidgetItem
                                name={"my-orders"}
                                count={2}
                                link={"/profile/my-orders"}
                            />
                        </>
                    )}

                    {checkAccess([ROLE.MODERATOR, ROLE.ADMIN], user.roleId) && (
                        <>
                            <WidgetItem
                                name={"add-product"}
                                count={857}
                                link={"/profile/add-product"}
                            />
                            <WidgetItem
                                name={"categories"}
                                count={8}
                                link={"/profile/category"}
                            />
                            <WidgetItem
                                name={"orders"}
                                count={387}
                                link={"/profile/orders"}
                            />
                        </>
                    )}

                    {checkAccess([ROLE.ADMIN], user.roleId) && (
                        <WidgetItem name={"users"} count={517} link={"/profile/users"} />
                    )}
                </div>
            </div>
        </>
    );
};
