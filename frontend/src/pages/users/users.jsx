import { Breadcrumbs } from "../../components";
import { UserRoll } from "./components/user-roll/user-roll";

const users = [
    {
        id: "33513",
        login: "ivan1994",
        registeredAt: "2019-05-03 21:42",
        role: "Покупатель",
    },
    {
        id: "123",
        login: "svetlanaSR",
        registeredAt: "2020-07-03 15:23",
        role: "Модератор",
    },
    {
        id: "1342",
        login: "igorBoldin",
        registeredAt: "2019-05-03 23:12",
        role: "Администратор",
    },
];

export const Users = () => {
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
                {users.map(({ id, login, registeredAt, role }) => (
                    <UserRoll
                        key={id}
                        login={login}
                        registeredAt={registeredAt}
                        role={role}
                    />
                ))}
            </div>
        </>
    );
};
