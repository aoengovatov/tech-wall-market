import { Breadcrumbs } from "../../components";
import { UserRoll } from "./components/user-roll/user-roll";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { request } from "../../utils";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [resStatus, setResStatus] = useState(0);
    const [serverError, setServerError] = useState("");

    useEffect(() => {
        request("/users").then(({ users, error, status }) => {
            setResStatus(status);

            if (error) {
                setServerError(`Ошибка: ${error}`);
                return;
            }

            setUsers(users);
        });
    }, []);

    if (resStatus === 403) {
        return <Navigate to="/access-denied" />;
    }

    return (
        <>
            <Breadcrumbs />
            <div className="mb-[30px]">
                <h1 className="ml-[10px] mb-[10px]">Пользователи</h1>
                <div className="grid grid-cols-3 mb-[5px] px-[5px] w-[80%]">
                    <div className="text-gray">Логин</div>
                    <div className="text-gray">Дата создания</div>
                    <div className="text-gray">Роль</div>
                    <div></div>
                </div>
                {!serverError ? (
                    users.map(({ id, login, registedAt, roleId: role }) => (
                        <UserRoll
                            key={id}
                            login={login}
                            registedAt={registedAt}
                            role={role}
                        />
                    ))
                ) : (
                    <div className="font-normal text-red">{serverError}</div>
                )}
            </div>
        </>
    );
};
