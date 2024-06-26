import { Breadcrumbs, BackBtn, TitleProfileWithBack } from "../../components";
import { UserRoll } from "./components/user-roll/user-roll";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { request } from "../../utils";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [resStatus, setResStatus] = useState(0);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([request("/users"), request("/users/roles")]).then(
            ([usersRes, rolesRes]) => {
                setResStatus(usersRes.status);

                if (usersRes.error || rolesRes.error) {
                    setServerError(usersRes.error || rolesRes.error);
                    return;
                }

                setRoles(rolesRes.roles);
                setUsers(usersRes.users);
            }
        );
    }, []);

    if (resStatus === 403) {
        return <Navigate to="/access-denied" />;
    }

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px] min-w-[550px]">
                <TitleProfileWithBack>Пользователи</TitleProfileWithBack>

                <div className="grid grid-cols-3 mb-[5px] px-[5px] w-[80%]">
                    <div className="text-gray">Логин</div>
                    <div className="text-gray">Дата создания</div>
                    <div className="text-gray">Роль</div>
                    <div></div>
                </div>
                {!serverError ? (
                    users.map(({ id, login, registedAt, roleId }) => (
                        <UserRoll
                            key={id}
                            id={id}
                            login={login}
                            registedAt={registedAt}
                            roleId={roleId}
                            roles={roles}
                        />
                    ))
                ) : (
                    <div className="font-normal text-red">{serverError}</div>
                )}
            </div>
        </>
    );
};
